import { useEffect, useRef, useState } from 'react';

interface GraphNode {
  id: string;
  label: string;
  category: 'core' | 'item';
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
}

interface Edge {
  source: string;
  target: string;
}

const NODES_DATA = [
  { id: 'people', label: 'People', category: 'core' },
  { id: 'projects', label: 'Projects', category: 'core' },
  { id: 'documents', label: 'Documents', category: 'core' },
  { id: 'goals', label: 'Goals', category: 'core' },
  { id: 'purchases', label: 'Purchases', category: 'core' },
  { id: 'ideas', label: 'Ideas', category: 'core' },
  { id: 'relationships', label: 'Relationships', category: 'core' },
  
  // Connections/Items
  { id: 'laura', label: 'Laura', category: 'item' },
  { id: 'passport', label: 'Passport PDF', category: 'item' },
  { id: 'macbook', label: 'MacBook Pro', category: 'item' },
  { id: 'tv_warranty', label: 'TV Warranty', category: 'item' },
  { id: 'cabin_deeds', label: 'Cabin Deeds', category: 'item' },
  { id: 'kyoto', label: 'Kyoto Temple Map', category: 'item' },
  { id: 'gift_idea', label: 'Ceramic Gift List', category: 'item' },
  { id: 'mike', label: 'Mike Shift Swap', category: 'item' },
  { id: 'wifi', label: 'WiFi Password', category: 'item' },
];

const EDGES_DATA: Edge[] = [
  { source: 'people', target: 'laura' },
  { source: 'people', target: 'mike' },
  { source: 'relationships', target: 'laura' },
  { source: 'relationships', target: 'gift_idea' },
  { source: 'ideas', target: 'gift_idea' },
  { source: 'purchases', target: 'macbook' },
  { source: 'purchases', target: 'tv_warranty' },
  { source: 'documents', target: 'passport' },
  { source: 'documents', target: 'cabin_deeds' },
  { source: 'documents', target: 'tv_warranty' },
  { source: 'projects', target: 'kyoto' },
  { source: 'goals', target: 'kyoto' },
  { source: 'ideas', target: 'wifi' },
  
  // Cross connections (neural links)
  { source: 'laura', target: 'gift_idea' },
  { source: 'passport', target: 'kyoto' },
  { source: 'macbook', target: 'tv_warranty' },
  { source: 'cabin_deeds', target: 'purchases' },
];

export const KnowledgeGraph = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const dpr = window.devicePixelRatio || 1;
    let width = canvas.clientWidth;
    let height = canvas.clientHeight;

    // Adjust canvas for High-DPI screen
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Initialize physical coordinates of nodes
    const nodes: GraphNode[] = NODES_DATA.map((node) => {
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * 80 + 40;
      const baseRadius = node.category === 'core' ? 32 : 22;
      
      return {
        id: node.id,
        label: node.label,
        category: node.category as 'core' | 'item',
        x: width / 2 + Math.cos(angle) * dist,
        y: height / 2 + Math.sin(angle) * dist,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        radius: baseRadius,
        baseRadius
      };
    });

    let activeHoverId: string | null = null;
    const mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      
      // Determine if cursor hovers a node
      let foundHover = false;
      for (const node of nodes) {
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < node.radius) {
          activeHoverId = node.id;
          setHoveredNode(node.id);
          foundHover = true;
          break;
        }
      }
      
      if (!foundHover) {
        activeHoverId = null;
        setHoveredNode(null);
      }
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      activeHoverId = null;
      setHoveredNode(null);
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };
    window.addEventListener('resize', handleResize);

    // Physical force variables
    const gravity = 0.008; // pull to center
    const friction = 0.96;

    const simulate = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // Update Node physics
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];

        // 1. Gravity pull to center
        n1.vx += (centerX - n1.x) * gravity * 0.05;
        n1.vy += (centerY - n1.y) * gravity * 0.05;

        // 2. Repulsion from other nodes to prevent cluster collisions
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n2.x - n1.x;
          const dy = n2.y - n1.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const minDist = n1.radius + n2.radius + 35;

          if (dist < minDist) {
            const force = (minDist - dist) * 0.015;
            const fx = (dx / dist) * force;
            const fy = (dy / dist) * force;
            n1.vx -= fx;
            n1.vy -= fy;
            n2.vx += fx;
            n2.vy += fy;
          }
        }

        // Apply velocities
        n1.vx *= friction;
        n1.vy *= friction;
        n1.x += n1.vx;
        n1.y += n1.vy;

        // Boundary constraint
        if (n1.x < n1.radius) { n1.x = n1.radius; n1.vx *= -0.5; }
        if (n1.x > width - n1.radius) { n1.x = width - n1.radius; n1.vx *= -0.5; }
        if (n1.y < n1.radius) { n1.y = n1.radius; n1.vy *= -0.5; }
        if (n1.y > height - n1.radius) { n1.y = height - n1.radius; n1.vy *= -0.5; }

        // Core animation node expansion on hover
        const targetRadius = activeHoverId === n1.id ? n1.baseRadius * 1.25 : n1.baseRadius;
        n1.radius += (targetRadius - n1.radius) * 0.15;
      }

      // Draw Edges (lines between nodes)
      for (const edge of EDGES_DATA) {
        const sourceNode = nodes.find(n => n.id === edge.source);
        const targetNode = nodes.find(n => n.id === edge.target);

        if (sourceNode && targetNode) {
          const isHighlighted = activeHoverId === sourceNode.id || activeHoverId === targetNode.id;
          ctx.beginPath();
          ctx.moveTo(sourceNode.x, sourceNode.y);
          ctx.lineTo(targetNode.x, targetNode.y);
          
          if (activeHoverId) {
            ctx.strokeStyle = isHighlighted 
              ? 'rgba(99, 102, 241, 0.4)' 
              : 'rgba(255, 255, 255, 0.02)';
            ctx.lineWidth = isHighlighted ? 1.5 : 0.5;
          } else {
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
            ctx.lineWidth = 0.6;
          }
          ctx.stroke();
        }
      }

      // Draw Nodes
      for (const node of nodes) {
        const isCore = node.category === 'core';
        const isHovered = activeHoverId === node.id;
        const isConnectedToHovered = activeHoverId && EDGES_DATA.some(
          edge => (edge.source === activeHoverId && edge.target === node.id) ||
                  (edge.target === activeHoverId && edge.source === node.id)
        );

        // Core glow backing
        if (isHovered || isConnectedToHovered) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius + 12, 0, Math.PI * 2);
          ctx.fillStyle = isHovered 
            ? 'rgba(99, 102, 241, 0.035)' 
            : 'rgba(255, 255, 255, 0.01)';
          ctx.fill();
        }

        // Draw bubble circle outline
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = isHovered 
          ? '#ffffff' 
          : isCore 
            ? '#08080a' 
            : '#050507';
        ctx.fill();
        ctx.strokeStyle = isHovered 
          ? '#ffffff' 
          : isConnectedToHovered
            ? 'rgba(99, 102, 241, 0.5)'
            : isCore 
              ? 'rgba(255, 255, 255, 0.15)' 
              : 'rgba(255, 255, 255, 0.07)';
        ctx.lineWidth = isHovered ? 2 : 1;
        ctx.stroke();

        // Draw text label
        ctx.font = `normal ${isCore ? '500' : '300'} 12px "Inter", sans-serif`;
        ctx.fillStyle = isHovered 
          ? '#000000' 
          : isConnectedToHovered
            ? '#ffffff'
            : isCore 
              ? 'rgba(255, 255, 255, 0.9)' 
              : 'rgba(255, 255, 255, 0.45)';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(node.label, node.x, node.y);
      }

      animationFrameId = requestAnimationFrame(simulate);
    };

    simulate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section id="graph" className="relative w-full bg-[#020202] py-[15vh] border-b border-white/[0.04]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        
        {/* Typographic header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-4">
            <span className="text-[11px] font-mono tracking-[0.2em] text-white/30 uppercase block mb-3">
              04 / THE KNOWLEDGE GRAPH
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-white tracking-[-0.03em] leading-tight">
              Everything, connected.
            </h2>
          </div>
          <div className="lg:col-span-8 flex flex-col justify-end">
            <p className="text-[15px] font-light text-white/50 leading-relaxed max-w-[560px]">
              Du Life connects files, goals, transactions, and dialogue. Hover over nodes below to witness the active associations of a second memory system.
            </p>
          </div>
        </div>

        {/* Graph Canvas Visual Area */}
        <div 
          ref={containerRef}
          className="relative w-full h-[520px] rounded-[24px] border border-white/[0.06] bg-[#050508]/40 overflow-hidden flex items-center justify-center cursor-crosshair select-none"
        >
          {/* Subtle instructions in background */}
          <div className="absolute top-6 left-6 z-10 pointer-events-none">
            <span className="text-[10px] font-mono tracking-widest text-white/20 uppercase">
              INTERACTIVE SYNAPSE MAP
            </span>
          </div>

          <div className="absolute bottom-6 right-6 z-10 pointer-events-none text-right">
            <span className="text-[10px] font-mono tracking-widest text-white/25 uppercase">
              {hoveredNode 
                ? `HOVERED NODE: ${hoveredNode.toUpperCase()}`
                : "HOVER ANY NODE TO EXPLORE"
              }
            </span>
          </div>

          {/* Actual Canvas */}
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        </div>

      </div>
    </section>
  );
};

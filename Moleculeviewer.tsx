// app/components/MoleculeViewer.tsx
'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    $3Dmol: any;
  }
}

export default function MoleculeViewer({ pdbString }: { pdbString: string }) {
  const viewerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (viewerRef.current && typeof window !== 'undefined' && window.$3Dmol) {
      const viewer = window.$3Dmol.createViewer(viewerRef.current, {
        backgroundColor: 0xf8f9fa
      });
      
      viewer.addModel(pdbString, "pdb");
      viewer.setStyle({}, { stick: { radius: 0.15 } });
      viewer.zoomTo();
      viewer.render();
    }
  }, [pdbString]);

  return <div ref={viewerRef} style={{ width: '100%', height: '300px' }} />;
}

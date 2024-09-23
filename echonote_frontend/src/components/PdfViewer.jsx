import React, { useState, useEffect, useRef, useCallback } from "react";
import * as St from "./styles/PdfViewer.style";
import * as pdfjsLib from "pdfjs-dist";

const PdfViewer = ({ url }) => {
  const canvasRef = useRef();
  const containerRef = useRef();
  pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.6.82/pdf.worker.min.mjs`;

  const [pdfRef, setPdfRef] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [scale, setScale] = useState(1);
  const renderTaskRef = useRef(null);

  const renderPage = useCallback(
    (pageNum, pdf = pdfRef) => {
      if (pdf) {
        pdf.getPage(pageNum !== null ? pageNum : 1).then(function (page) {
          const viewport = page.getViewport({ scale });
          const canvas = canvasRef.current;
          canvas.height = viewport.height;
          canvas.width = viewport.width;
          const renderContext = {
            canvasContext: canvas.getContext("2d"),
            viewport: viewport,
          };

          if (renderTaskRef.current) {
            renderTaskRef.current.cancel();
          }

          renderTaskRef.current = page.render(renderContext);

          renderTaskRef.current.promise
            .then(() => {
              renderTaskRef.current = null;
            })
            .catch((err) => {
              if (err.name !== "RenderingCancelledException") {
                console.error(err);
              }
            });
        });
      }
    },
    [pdfRef, scale]
  );

  useEffect(() => {
    renderPage(currentPage, pdfRef);
  }, [pdfRef, currentPage, scale]);

  useEffect(() => {
    const loadingTask = pdfjsLib.getDocument(
      // url
      "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf" // 임시 링크
    );
    loadingTask.promise.then(
      (loadedPdf) => {
        setPdfRef(loadedPdf);
      },
      (err) => {
        console.error(err);
      }
    );
  }, [url]);

  // Pinch zoom 관련 로직
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let initialDistance = null;

    const onTouchStart = (e) => {
      if (e.touches.length === 2) {
        e.preventDefault();
        const dx = e.touches[0].pageX - e.touches[1].pageX;
        const dy = e.touches[0].pageY - e.touches[1].pageY;
        initialDistance = Math.sqrt(dx * dx + dy * dy);
      }
    };

    const onTouchMove = (e) => {
      if (e.touches.length === 2 && initialDistance) {
        e.preventDefault();
        const dx = e.touches[0].pageX - e.touches[1].pageX;
        const dy = e.touches[0].pageY - e.touches[1].pageY;
        const currentDistance = Math.sqrt(dx * dx + dy * dy);

        if (currentDistance > initialDistance) {
          setScale((prevScale) => Math.min(prevScale + 0.02, 5)); // 줌인
        } else {
          setScale((prevScale) => Math.max(prevScale - 0.02, 0.7)); // 줌아웃
        }

        initialDistance = currentDistance;
      }
    };

    const onTouchEnd = () => {
      initialDistance = null;
    };

    container.addEventListener("touchstart", onTouchStart);
    container.addEventListener("touchmove", onTouchMove);
    container.addEventListener("touchend", onTouchEnd);

    return () => {
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchmove", onTouchMove);
      container.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <St.PdfBackground ref={containerRef}>
      <St.PdfPage>
        <canvas ref={canvasRef}></canvas>
      </St.PdfPage>
    </St.PdfBackground>
  );
};
export default PdfViewer;

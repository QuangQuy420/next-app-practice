'use client';

import { useState, useRef, ChangeEvent, useEffect, useCallback } from 'react';

enum typeFilters {
  blur = 'blur',
  brightness = 'brightness',
  contrast = 'contrast',
  dropShadow = 'drop-shadow',
  grayscale = 'grayscale',
  hueRotate = 'hue-rotate',
  invert = 'invert',
  opacity = 'opacity',
  saturate = 'saturate',
  sepia = 'sepia',
}

interface Filter {
  blur: number;
  brightness: number;
  contrast: number;
  grayscale: number;
  invert: number;
  opacity: number;
  saturate: number;
  sepia: number;
}

const CANVAS_WIDTH = 1080;
const CANVAS_HEIGHT = 607.5;

const ImageEditor = () => {
  const initFilter = {
    blur: 0,
    brightness: 100,
    contrast: 100,
    grayscale: 0,
    invert: 0,
    opacity: 100,
    saturate: 100,
    sepia: 0,
  };

  const [image, setImage] = useState<string | null>(null);
  const [filter, setFilter] = useState<Filter>(initFilter);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const updateFilter = (value: string, filterType: typeFilters) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      [filterType]: parseInt(value),
    }));
  };

  const getFilterStyle = useCallback(() => {
    const {
      blur,
      brightness,
      contrast,
      grayscale,
      invert,
      opacity,
      saturate,
      sepia,
    } = filter;

    return `
            blur(${blur}px)
            brightness(${brightness}%)
            contrast(${contrast}%)
            grayscale(${grayscale}%)
            invert(${invert}%)
            opacity(${opacity}%)
            saturate(${saturate}%)
            sepia(${sepia}%)
        `;
  }, [filter]);

  useEffect(() => {
    if (canvasRef.current && image) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const img = new Image();
      img.src = image;

      img.onload = () => {
        const imgHeight = img.height;
        const imgWidth = img.width;

        if (imgWidth / CANVAS_WIDTH > imgHeight / CANVAS_HEIGHT) {
          img.width = CANVAS_WIDTH;
          img.height = imgHeight / (imgWidth / CANVAS_WIDTH);
        } else {
          img.width = imgWidth / (imgHeight / CANVAS_HEIGHT);
          img.height = CANVAS_HEIGHT;
        }

        canvas.width = CANVAS_WIDTH;
        canvas.height = CANVAS_HEIGHT;

        if (ctx) {
          ctx.filter = getFilterStyle();
          ctx.drawImage(
            img,
            (CANVAS_WIDTH - img.width) / 2,
            (CANVAS_HEIGHT - img.height) / 2,
            img.width,
            img.height
          );
        }
      };
    }
  }, [getFilterStyle, image]);

  const handleDownload = () => {
    if (canvasRef.current) {
      const link = document.createElement('a');
      link.download = 'edited-image.png';
      link.href = canvasRef.current.toDataURL();
      link.click();
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-100 p-4">
      <h1 className="mb-4 text-2xl font-bold">Image Editor</h1>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="mb-4 rounded border p-2"
      />
      {image && (
        <div className="flex flex-col items-center">
          <canvas
            ref={canvasRef}
            width={CANVAS_WIDTH}
            height={CANVAS_HEIGHT}
            className="mb-4 border border-gray-300 shadow-md"
          />
          <div className="mb-4 grid grid-cols-2 gap-4">
            {Object.keys(filter).map((key) => (
              <label key={key} className="flex justify-between">
                {key.charAt(0).toUpperCase() + key.slice(1)}
                <input
                  type="range"
                  min="0"
                  max="200"
                  step="1"
                  value={filter[key as keyof Filter]}
                  onChange={(e) =>
                    updateFilter(
                      e.target.value,
                      key as keyof Filter as typeFilters
                    )
                  }
                  className="w-32"
                />
              </label>
            ))}
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setFilter(initFilter)}
              className="mt-4 rounded bg-green-500 px-4 py-2 text-white shadow hover:bg-green-600"
            >
              Reset Filter
            </button>
            <button
              onClick={handleDownload}
              className="mt-4 rounded bg-green-500 px-4 py-2 text-white shadow hover:bg-green-600"
            >
              Download Image
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageEditor;

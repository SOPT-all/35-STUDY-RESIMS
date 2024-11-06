import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./components/card";
import { Button } from "./components/button";
import { Timer, Sparkles, PauseCircle } from "lucide-react";

const FiberDemo = () => {
  const [heavyList, setHeavyList] = useState([]);
  const [counter, setCounter] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [renderTimes, setRenderTimes] = useState([]);

  // 무거운 리스트 만들기
  const generateHeavyList = () => {
    const newList = [];
    for (let i = 0; i < 10000; i++) {
      newList.push({
        id: i,
        value: Math.sin(i) * Math.cos(i),
        color: `hsl(${Math.random() * 360}, 70%, 80%)`,
      });
    }
    return newList;
  };

  // 렌더시간 계산
  const measureRender = (start) => {
    const end = performance.now();
    setRenderTimes((prev) => [...prev, Math.round(end - start)]);
  };

  useEffect(() => {
    let intervalId;
    if (!isPaused) {
      intervalId = setInterval(() => {
        setCounter((c) => c + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isPaused]);

  const handleHeavyTask = () => {
    const start = performance.now();
    setHeavyList(generateHeavyList());
    measureRender(start);
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Timer className="w-5 h-5" />
              Counter Component
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold mb-4">{counter}</div>
            <Button onClick={() => setIsPaused(!isPaused)} className="w-full">
              <PauseCircle className="w-4 h-4 mr-2" />
              {isPaused ? "Resume Counter" : "Pause Counter"}
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Heavy Task Control
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button onClick={handleHeavyTask} className="w-full mb-4">
              Generate Heavy List
            </Button>
            <div className="text-sm">
              Last {renderTimes.length} render times:
              {renderTimes.slice(-3).map((time, i) => (
                <span key={i} className="ml-2 font-mono">
                  {time}ms
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="p-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
            {heavyList.slice(0, 48).map((item) => (
              <div
                key={item.id}
                className="aspect-square rounded-lg flex items-center justify-center text-xs"
                style={{ backgroundColor: item.color }}
              >
                {item.id}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FiberDemo;

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [selectedPlatform, setSelectedPlatform] = useState(1);

  const platforms = [
    {
      id: "fgais",
      name: "ФГАИС «Молодежь России»",
      description: "Всероссийская информационная система для молодежи",
      url: "", // Добавить ссылку пользователя
      color: "from-blue-600 to-blue-700",
    },
    {
      id: "tavrida",
      name: "Таврида.Арт",
      description: "Международный молодежный образовательный форум",
      url: "", // Добавить ссылку пользователя
      color: "from-purple-600 to-purple-700",
    },
    {
      id: "custom",
      name: "Твой ход",
      description: "Создай свою собственную платформу или выбери другой путь",
      url: "#",
      color: "from-green-600 to-green-700",
    },
  ];

  const handlePlatformSelect = () => {
    const platform = platforms[selectedPlatform];
    if (platform.url && platform.url !== "#") {
      window.open(platform.url, "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-white font-open-sans flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-oswald font-bold text-black tracking-wide mb-4">
            ВЫБОР ПЛАТФОРМЫ
          </h1>
          <div className="w-32 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 font-open-sans">
            Выбери свой путь для участия в форумах
          </p>
        </div>

        {/* Platform Selector */}
        <Card className="p-10 border-2 border-gray-200 shadow-lg">
          <div className="space-y-8">
            {/* Platform Labels */}
            <div className="flex items-center justify-between text-xs font-medium text-gray-500 px-2">
              <span>ФГАИС</span>
              <span>ТАВРИДА</span>
              <span>ТВОЙ ХОД</span>
            </div>

            {/* Slider */}
            <Slider
              value={[selectedPlatform]}
              onValueChange={(value) => setSelectedPlatform(value[0])}
              max={2}
              min={0}
              step={1}
              className="w-full"
            />

            {/* Selected Platform Display */}
            <div className="text-center pt-6">
              <div
                className={`w-20 h-20 rounded-full bg-gradient-to-br ${platforms[selectedPlatform].color} mx-auto mb-6 flex items-center justify-center`}
              >
                <Icon name="Target" size={32} className="text-white" />
              </div>

              <h3 className="text-2xl font-oswald font-bold text-black mb-3">
                {platforms[selectedPlatform].name}
              </h3>
              <p className="text-gray-600 font-open-sans text-lg leading-relaxed mb-8">
                {platforms[selectedPlatform].description}
              </p>

              <Button
                onClick={handlePlatformSelect}
                className="bg-black hover:bg-gray-800 text-white font-oswald font-medium px-8 py-3 text-lg transition-all duration-200 hover:scale-105"
                disabled={
                  !platforms[selectedPlatform].url ||
                  platforms[selectedPlatform].url === "#"
                }
              >
                <Icon name="ExternalLink" size={20} className="mr-2" />
                ПЕРЕЙТИ НА ПЛАТФОРМУ
              </Button>

              {platforms[selectedPlatform].url === "#" && (
                <p className="text-sm text-gray-500 mt-3">
                  Ссылка будет добавлена позже
                </p>
              )}
            </div>
          </div>
        </Card>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-gray-500 font-open-sans">
            Система выбора платформы для молодежных форумов
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;

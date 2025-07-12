import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [selectedPlatform, setSelectedPlatform] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    motivation: "",
    skills: "",
  });

  const platforms = [
    {
      id: "fgais",
      name: "ФГАИС «Молодежь России»",
      description: "Всероссийская информационная система для молодежи",
    },
    {
      id: "tavrida",
      name: "Таврида.Арт",
      description: "Международный молодежный образовательный форум",
    },
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Форма отправлена:", {
      platform: platforms[selectedPlatform],
      ...formData,
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-white font-open-sans">
      {/* Header */}
      <header className="border-b border-gray-200 py-6">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl font-oswald font-bold text-black tracking-wide">
            ФОРУМ ИНФОРМАЦИЯ
          </h1>
          <p className="text-gray-600 mt-2 font-open-sans">
            Сбор информации для участия в форумах
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Platform Selector */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-oswald font-semibold mb-4 text-black">
              ВЫБЕРИТЕ ПЛАТФОРМУ
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
          </div>

          <Card className="p-8 border-2 border-gray-200 shadow-sm">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500">
                  {platforms[0].name}
                </span>
                <span className="text-sm font-medium text-gray-500">
                  {platforms[1].name}
                </span>
              </div>

              <Slider
                value={[selectedPlatform]}
                onValueChange={(value) => setSelectedPlatform(value[0])}
                max={1}
                min={0}
                step={1}
                className="w-full"
              />

              <div className="text-center pt-4">
                <h3 className="text-xl font-oswald font-semibold text-black mb-2">
                  {platforms[selectedPlatform].name}
                </h3>
                <p className="text-gray-600 font-open-sans">
                  {platforms[selectedPlatform].description}
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Information Form */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-oswald font-semibold mb-4 text-black">
              ЛИЧНАЯ ИНФОРМАЦИЯ
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
          </div>

          <Card className="p-8 border-2 border-gray-200 shadow-sm">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-sm font-medium text-black"
                  >
                    Полное имя
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="border-gray-300 focus:border-black focus:ring-black"
                    placeholder="Введите ваше полное имя"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-black"
                  >
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="border-gray-300 focus:border-black focus:ring-black"
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="phone"
                  className="text-sm font-medium text-black"
                >
                  Телефон
                </Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="border-gray-300 focus:border-black focus:ring-black"
                  placeholder="+7 (XXX) XXX-XX-XX"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="experience"
                  className="text-sm font-medium text-black"
                >
                  Опыт участия в форумах
                </Label>
                <Textarea
                  id="experience"
                  value={formData.experience}
                  onChange={(e) =>
                    handleInputChange("experience", e.target.value)
                  }
                  className="border-gray-300 focus:border-black focus:ring-black min-h-[100px]"
                  placeholder="Расскажите о вашем опыте участия в молодежных форумах..."
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="motivation"
                  className="text-sm font-medium text-black"
                >
                  Мотивация для участия
                </Label>
                <Textarea
                  id="motivation"
                  value={formData.motivation}
                  onChange={(e) =>
                    handleInputChange("motivation", e.target.value)
                  }
                  className="border-gray-300 focus:border-black focus:ring-black min-h-[100px]"
                  placeholder="Почему вы хотите участвовать в этом форуме?..."
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="skills"
                  className="text-sm font-medium text-black"
                >
                  Навыки и компетенции
                </Label>
                <Textarea
                  id="skills"
                  value={formData.skills}
                  onChange={(e) => handleInputChange("skills", e.target.value)}
                  className="border-gray-300 focus:border-black focus:ring-black min-h-[100px]"
                  placeholder="Опишите ваши ключевые навыки и области экспертизы..."
                />
              </div>

              <div className="pt-6">
                <Button
                  type="submit"
                  className="w-full bg-black hover:bg-gray-800 text-white font-oswald font-medium py-3 text-lg transition-colors duration-200"
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  ОТПРАВИТЬ ЗАЯВКУ
                </Button>
              </div>
            </form>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 mt-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-600 font-open-sans">
            Система сбора информации для молодежных форумов
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sprout, Bug } from 'lucide-react';

const RecommendationCard = ({ cropData }: { cropData: any }) => {
  const getFertilizerRecommendation = (cropType: string) => {
    const recommendations = {
      wheat: { name: "NPK 20-20-20", usage: "Apply 100kg per acre" },
      rice: { name: "Urea", usage: "Apply 120kg per acre" },
      corn: { name: "NPK 15-15-15", usage: "Apply 90kg per acre" },
      cotton: { name: "DAP", usage: "Apply 80kg per acre" },
    };
    return recommendations[cropType as keyof typeof recommendations] || { name: "Not available", usage: "Contact local expert" };
  };

  const getPesticideRecommendation = (cropType: string) => {
    const recommendations = {
      wheat: { name: "Propiconazole", usage: "2ml per liter of water" },
      rice: { name: "Carbendazim", usage: "1.5ml per liter of water" },
      corn: { name: "Chlorpyrifos", usage: "2.5ml per liter of water" },
      cotton: { name: "Imidacloprid", usage: "1ml per liter of water" },
    };
    return recommendations[cropType as keyof typeof recommendations] || { name: "Not available", usage: "Contact local expert" };
  };

  const fertilizer = getFertilizerRecommendation(cropData.cropType);
  const pesticide = getPesticideRecommendation(cropData.cropType);

  return (
    <div className="space-y-4">
      <Card className="bg-white">
        <CardHeader className="flex flex-row items-center gap-2">
          <Sprout className="h-5 w-5 text-fresh" />
          <CardTitle className="text-lg">Fertilizer Recommendation</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="font-medium text-forest">{fertilizer.name}</p>
          <p className="text-sm text-gray-600">{fertilizer.usage}</p>
        </CardContent>
      </Card>

      <Card className="bg-white">
        <CardHeader className="flex flex-row items-center gap-2">
          <Bug className="h-5 w-5 text-earth" />
          <CardTitle className="text-lg">Pesticide Recommendation</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="font-medium text-forest">{pesticide.name}</p>
          <p className="text-sm text-gray-600">{pesticide.usage}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecommendationCard;
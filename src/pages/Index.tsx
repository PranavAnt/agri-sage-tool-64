import { useState } from 'react';
import Header from '@/components/Header';
import CropForm from '@/components/CropForm';
import RecommendationCard from '@/components/RecommendationCard';
import StoreLocator from '@/components/StoreLocator';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const [cropData, setCropData] = useState<any>(null);
  const { toast } = useToast();

  const handleCropSubmit = (data: any) => {
    setCropData(data);
    toast({
      title: "Recommendations Updated",
      description: "We've updated your recommendations based on the crop details.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto py-6 px-4 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <CropForm onSubmit={handleCropSubmit} />
            <StoreLocator />
          </div>
          
          {cropData && (
            <div className="md:sticky md:top-6 space-y-6">
              <RecommendationCard cropData={cropData} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;
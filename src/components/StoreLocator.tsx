import { MapPin, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const stores = [
  {
    name: "AgriCare Store",
    address: "123 Farming Road",
    phone: "+1 234-567-8900",
    distance: "2.5 km"
  },
  {
    name: "Farm Supplies Co.",
    address: "456 Rural Avenue",
    phone: "+1 234-567-8901",
    distance: "3.8 km"
  },
  {
    name: "Green Thumb Agro",
    address: "789 Harvest Street",
    phone: "+1 234-567-8902",
    distance: "4.2 km"
  }
];

const StoreLocator = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Nearby Stores</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {stores.map((store, index) => (
          <div key={index} className="border rounded-lg p-4 space-y-2">
            <h3 className="font-medium text-forest">{store.name}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="h-4 w-4" />
              <span>{store.address} ({store.distance})</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Phone className="h-4 w-4" />
              <span>{store.phone}</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default StoreLocator;
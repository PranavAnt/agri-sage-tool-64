import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CropForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [cropType, setCropType] = useState("");
  const [fieldSize, setFieldSize] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ date, cropType, fieldSize });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Crop Details</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Crop Type</label>
            <Select value={cropType} onValueChange={setCropType}>
              <SelectTrigger>
                <SelectValue placeholder="Select crop type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="wheat">Wheat</SelectItem>
                <SelectItem value="rice">Rice</SelectItem>
                <SelectItem value="corn">Corn</SelectItem>
                <SelectItem value="cotton">Cotton</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Planting Date</label>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Field Size (acres)</label>
            <Input
              type="number"
              value={fieldSize}
              onChange={(e) => setFieldSize(e.target.value)}
              placeholder="Enter field size"
            />
          </div>

          <Button type="submit" className="w-full bg-fresh hover:bg-fresh-light">
            Get Recommendations
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CropForm;
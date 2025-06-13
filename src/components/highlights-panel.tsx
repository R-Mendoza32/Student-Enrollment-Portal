
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, UserPlus, TrendingDown } from "lucide-react";

const highlights = [
  {
    title: "Total Active Students",
    value: "1,247",
    change: "+12.3%",
    changeType: "positive" as const,
    icon: Users,
  },
  {
    title: "New Signups Today",
    value: "23",
    change: "+5.2%",
    changeType: "positive" as const,
    icon: UserPlus,
  },
  {
    title: "Dropout Rate",
    value: "2.1%",
    change: "-0.8%",
    changeType: "negative" as const,
    icon: TrendingDown,
  },
];

export function HighlightsPanel() {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Highlights</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {highlights.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white rounded-lg shadow-sm">
                <item.icon className="w-4 h-4 text-gray-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{item.title}</p>
                <p className="text-xs text-gray-500">{item.value}</p>
              </div>
            </div>
            <div className={`text-xs font-medium ${
              item.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
            }`}>
              {item.change}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

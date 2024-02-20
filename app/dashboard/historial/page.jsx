import { Card } from "../../../components/dashboard/tour/card/Card";

export default function Home() {
  return (
    <>
      <div className="flex justify-end gap-5 w-11/12 mr-0 mt-10">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded-full bg-red-500" />
          <p>Incompletos</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded-full bg-green-500" />
          <p>Completos</p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 w-11/12 mx-auto mb-5">
        <Card />
      </div>
    </>
  );
}
import Card from "@/components/Card"
import Button from "@/components/Button";



const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />

      <div className="space-y-2">
        <Button title="Small Rounded" styles="text-sm px-4 py-1 rounded-sm bg-blue-500" />
        <Button title="Medium Rounded-md" styles="text-base px-5 py-2 rounded-md bg-green-500" />
        <Button title="Large Rounded-full" styles="text-lg px-6 py-3 rounded-full bg-red-500" />
        <Button title="Large Rounded-lg" styles="text-base px-5 py-2 rounded-lg bg-purple-500" />
      </div>

    </div>
  )
}
export default Landing

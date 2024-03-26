import getData from "@/utils/getData"

export default async function Page() {
    const data = await getData()
   
    return <main></main>
  }
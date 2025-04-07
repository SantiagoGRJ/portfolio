import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Carrosel from "ui/home/carrusel";

type Props = {};

function Home({}: Props) {
  return (
    <section id="home" className="relative flex flex-col items-center p-20 min-h-screen text-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Contenido principal */}
      <div className="relative ">
        <div className="mb-8">
          <div className="flex justify-center mb-4">
            <Avatar className="w-36 h-36">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">
              Santiago <br /> Gomez
            </h1>
            <h5 className="text-xl text-opacity-80 text-gray-300">
              Ingeniero de Software | Back-End | Algo de Front-End
            </h5>
          </div>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold">Tecnologías</h1>
          <div className="mt-4">
            <Carrosel />
          </div>
        </div>

        <div>
          <Button
            variant="outline"
            className="px-12 py-4 text-lg text-white border-white hover:bg-white hover:text-gray-900"
          >
            Acerca de Mi
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Home;
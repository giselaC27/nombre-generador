import { useState } from "react";
import { AiOutlineCopy } from "react-icons/ai";

function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function NuevoNombreDocumento() {
  const [codigoDocumento, setCodigoDocumento] = useState("");
  const [versionDocumento, setVersionDocumento] = useState("");
  const [nombreDocumento, setNombreDocumento] = useState("");
  const [nuevoNombre, setNuevoNombre] = useState("");
  const [copiado, setCopiado] = useState(false);

  const generarNuevoNombre = () => {
    const palabras = nombreDocumento.split(" ");
    const dosPrimerasLetras = palabras.map((palabra) =>
      capitalizeFirstLetter(palabra.slice(0, 2))
    );
    const nuevoNombreGenerado = `${codigoDocumento}_${versionDocumento}_${dosPrimerasLetras.join(
      ""
    )}`;
    setNuevoNombre(nuevoNombreGenerado);
    setCopiado(false); 
  };

  const copiarAlPortapapeles = () => {
    const input = document.createElement("input");
    input.value = nuevoNombre;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    setCopiado(true);
  };

  const resetearCampos = () => {
    setCodigoDocumento("");
    setVersionDocumento("");
    setNombreDocumento("");
    setNuevoNombre("");
    setCopiado(false);
  };

  return (
    <div className="p-4 mx-auto bg-white rounded">
    <h1 className="text-3xl font-bold text-center">
      Generador de Nuevo Nombre de Documento
    </h1>
    <div className="p-4 max-w-md mx-auto bg-white rounded shadow-md">
     

      <div className="mb-4">
        <label className="block mb-2 font-bold">Código del Documento:</label>
        <input
          type="text"
          value={codigoDocumento}
          onChange={(e) => setCodigoDocumento(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold">Versión del Documento:</label>
        <input
          type="text"
          value={versionDocumento}
          onChange={(e) => setVersionDocumento(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold">Nombre del Documento:</label>
        <input
          type="text"
          value={nombreDocumento}
          onChange={(e) => setNombreDocumento(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        onClick={generarNuevoNombre}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 font-bold"
      >
        Generar Nuevo Nombre
      </button>
      <div className="mt-4">
        {nuevoNombre && (
          <div className="flex items-center">
            <strong className="mr-2">Nuevo Nombre Generado:</strong>
            <span>{nuevoNombre}</span>
            <button
              onClick={copiarAlPortapapeles}
              className={`ml-2 p-2 text-blue-500 ${
                copiado ? "text-green-500" : "hover:text-blue-600"
              }`}
            >
              <AiOutlineCopy size={20} />
            </button>
          </div>
        )}
        <button
          onClick={resetearCampos}
          className="mt-4 p-2 bg-gray-300 hover:bg-gray-400 text-gray-700 hover:text-gray-800 rounded"
        >
          Restablecer
        </button>
      </div>
    </div>
    </div>
  );
}

export default NuevoNombreDocumento;

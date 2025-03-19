import { connect } from "@/lib/mongodb/mongoose"; // Ajusta la ruta según tu estructura

export default async function TestDBPage() {
  try {
    await connect();
    return <div>✅ Conexión exitosa a MongoDB</div>;
  } catch (error) {
    return <div>❌ Error al conectar a MongoDB: {error.message}</div>;
  }
}

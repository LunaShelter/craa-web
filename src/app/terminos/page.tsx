import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Términos y condiciones' };

export default function TerminosPage() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[#012B4E] mb-8">Términos y condiciones</h1>
        <div className="space-y-6 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-[#012B4E] mb-3">1. Aceptación</h2>
            <p>Al utilizar este sitio web, aceptas los presentes términos y condiciones. Si no estás de acuerdo, te pedimos que no uses el sitio.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#012B4E] mb-3">2. Uso del sitio</h2>
            <p>Este sitio es de uso personal e informativo. No está permitido usar el contenido con fines comerciales sin autorización expresa de CRAA.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#012B4E] mb-3">3. Donaciones</h2>
            <p>Las donaciones realizadas a CRAA son voluntarias y destinadas al bienestar animal. CRAA no ofrece retribuciones materiales a cambio de donaciones. Todas las donaciones se gestionan con total transparencia.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#012B4E] mb-3">4. Propiedad intelectual</h2>
            <p>El contenido de este sitio (textos, imágenes, logotipos) es propiedad de CRAA. Las fotografías de animales pueden tener otros derechos de autor indicados en cada caso.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#012B4E] mb-3">5. Limitación de responsabilidad</h2>
            <p>CRAA no se hace responsable de los daños derivados del uso de este sitio web ni de la información proporcionada por terceros.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#012B4E] mb-3">6. Contacto</h2>
            <p>Para cualquier consulta sobre estos términos, escríbenos a <a href="mailto:contacto@craa.pe" className="text-[#2BC4B5]">contacto@craa.pe</a></p>
          </section>
        </div>
        <p className="text-gray-400 text-sm mt-10">Última actualización: agosto 2025</p>
      </div>
    </div>
  );
}

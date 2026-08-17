import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Política de privacidad' };

export default function PrivacidadPage() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
        <h1 className="text-3xl font-bold text-[#012B4E] mb-8">Política de privacidad</h1>
        <p className="text-gray-600 mb-6">
          <strong>CRAA — Conciencia y Rescate Animal Ayacucho</strong> se compromete a proteger la privacidad de sus usuarios y donantes. Esta política describe cómo recopilamos, usamos y protegemos la información personal.
        </p>
        <h2 className="text-xl font-bold text-[#012B4E] mt-8 mb-3">Información que recopilamos</h2>
        <p className="text-gray-600 mb-4">
          Recopilamos únicamente la información que nos proporcionas voluntariamente a través de formularios de contacto, voluntariado o partners. Esta información incluye nombre, correo electrónico y número de teléfono.
        </p>
        <h2 className="text-xl font-bold text-[#012B4E] mt-8 mb-3">Uso de la información</h2>
        <p className="text-gray-600 mb-4">
          La información recopilada se utiliza exclusivamente para comunicarnos contigo en relación a tu consulta, donación o participación como voluntario o partner. No vendemos ni compartimos tu información con terceros.
        </p>
        <h2 className="text-xl font-bold text-[#012B4E] mt-8 mb-3">Cookies</h2>
        <p className="text-gray-600 mb-4">
          Este sitio puede utilizar cookies técnicas necesarias para el funcionamiento de la web. No utilizamos cookies de seguimiento o publicidad.
        </p>
        <h2 className="text-xl font-bold text-[#012B4E] mt-8 mb-3">Contacto</h2>
        <p className="text-gray-600">
          Para cualquier consulta relacionada con tu privacidad, escríbenos a{' '}
          <a href="mailto:contacto@craa.pe" className="text-[#2BC4B5]">contacto@craa.pe</a>
        </p>
        <p className="text-gray-400 text-sm mt-8">Última actualización: agosto 2025</p>
      </div>
    </div>
  );
}

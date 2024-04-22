import {FeatureItem} from "./FeatureItem.tsx";

export const Features = () => {
  return (
    <section className="flex justify-center items-center flex-col gap-5 text-center my-20">
      <h2 className="font-extrabold text-3xl w-4/6 leading-tight text-dark mb-2">Descubre las Características de StudyPlanner</h2>
      <div className="mx-auto px-4">
        <p className="text-lg text-gray-600 mb-12">Descubre las funciones que revolucionarán tu gestión del tiempo y
          estudios</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-16">
          <FeatureItem icon="fas fa-clock" title="Gestión Integral del Tiempo">
            Organiza tus asignaturas, tareas y exámenes de manera intuitiva y eficiente.
          </FeatureItem>
          <FeatureItem icon="fas fa-calendar-alt" title="Seguimiento Detallado de Fechas de Exámenes">
            Mantén un registro preciso de todas tus fechas de exámenes para una preparación efectiva.
          </FeatureItem>

          <FeatureItem icon="fas fa-file-alt" title="Vistas Personalizadas">
            Accede a múltiples vistas, como próximas entregas y temas estudiados, para una planificación más detallada.
          </FeatureItem>

          <FeatureItem icon="fas fa-bell" title="Notificaciones y Recordatorios">
            Recibe recordatorios oportunos para tareas próximas, fechas de exámenes y eventos importantes.
          </FeatureItem>

          <FeatureItem icon="fas fa-desktop" title="Interfaz Intuitiva y Fácil de Usar">
            Disfruta de una experiencia fluida con una interfaz diseñada pensando en la comodidad del usuario.
          </FeatureItem>

          <FeatureItem icon="fas fa-mobile-alt" title="Acceso desde Cualquier Dispositivo">
            Accede a tu planificador desde tu computadora, tableta o teléfono inteligente, estés donde estés.
          </FeatureItem>
        </div>
      </div>
    </section>
  )
}
   const examData = [
   /* ===================== BASE DE DATOS ===================== */
  /* Perfil Tiroideo */
 {
  id: 1,
  name: "T3",
  desc: "Mide la hormona triyodotironina total para valorar la actividad de la glándula tiroides.",
  category: "Perfil Tiroideo",
  img: "./assets/images/Examenes/Perfil Tiroideo/T3.png",
  price: "$45.000",
  sample: "Sangre",
  time: "24 horas",
  details: "Útil para identificar hipertiroidismo, hipotiroidismo y alteraciones metabólicas."
},
{
  id: 2,
  name: "T3 libre",
  desc: "Determina la fracción activa de la hormona T3 que circula libre en la sangre.",
  category: "Perfil Tiroideo",
  img: "./assets/images/Examenes/Perfil Tiroideo/T3 libre.png",
  price: "$45.000",
  sample: "Sangre",
  time: "24 horas",
  details: "Permite evaluar con mayor precisión el funcionamiento real de la tiroides."
},
{
  id: 3,
  name: "T4",
  desc: "Mide la cantidad total de tiroxina producida por la glándula tiroides.",
  category: "Perfil Tiroideo",
  img: "./assets/images/Examenes/Perfil Tiroideo/T4.png",
  price: "$45.000",
  sample: "Sangre",
  time: "24 horas",
  details: "Apoya el diagnóstico de hipotiroidismo, hipertiroidismo y control de tratamientos."
},
{
  id: 4,
  name: "T4 Libre",
  desc: "Evalúa la fracción activa de la hormona T4 no unida a proteínas.",
  category: "Perfil Tiroideo",
  img: "./assets/images/Examenes/Perfil Tiroideo/T4 Libre.png",
  price: "$45.000",
  sample: "Sangre",
  time: "24 horas",
  details: "Es uno de los indicadores más importantes para valorar la función tiroidea."
},
{
  id: 6,
  name: "Tiroestimulante (TSH)",
  desc: "Hormona que regula la producción de T3 y T4 por la glándula tiroides.",
  category: "Perfil Tiroideo",
  img: "./assets/images/Examenes/Perfil Tiroideo/Hormona & Tiroestimulante (TSH).png",
  price: "$45.000",
  sample: "Sangre",
  time: "24 horas",
  details: "Examen principal para detectar hipotiroidismo e hipertiroidismo."
},
{
  id: 7,
  name: "Anti-TPO",
  desc: "Detecta anticuerpos contra la tiroides relacionados con enfermedades autoinmunes.",
  category: "Perfil Tiroideo",
  img: "./assets/images/Examenes/Perfil Tiroideo/Anti-TPO.png",
  price: "$45.000",
  sample: "Sangre",
  time: "24 horas",
  details: "Fundamental para diagnosticar tiroiditis autoinmune como Hashimoto."
},

/* Paquete Tumoral */
 {
  id: 8,
  name: "CA-125 (Ovario)",
  desc: "Marcador tumoral utilizado principalmente en la evaluación de cáncer de ovario.",
  category: "Paquete Tumoral",
  img: "./assets/images/Examenes/Paquete Tumoral/Ovario.png",
  price: "$120.000",
  sample: "Sangre",
  time: "48 horas",
  details: "Útil para diagnóstico y seguimiento de cáncer de ovario."
},
{
  id: 9,
  name: "CA-15.3 (Mama)",
  desc: "Marcador tumoral asociado al cáncer de mama.",
  category: "Paquete Tumoral",
  img: "./assets/images/Examenes/Paquete Tumoral/Mamas.png",
  price: "$120.000",
  sample: "Sangre",
  time: "48 horas",
  details: "Se usa para seguimiento del tratamiento en cáncer de mama."
},
{
  id: 10,
  name: "CA 19-9 (Páncreas)",
  desc: "Marcador tumoral relacionado principalmente con cáncer de páncreas.",
  category: "Paquete Tumoral",
  img: "./assets/images/Examenes/Paquete Tumoral/Pancreas.png",
  price: "$120.000",
  sample: "Sangre",
  time: "48 horas",
  details: "Apoya el diagnóstico y control de tumores pancreáticos."
},
{
  id: 11,
  name: "CA-72.4 (Estómago)",
  desc: "Marcador tumoral utilizado en cáncer gástrico.",
  category: "Paquete Tumoral",
  img: "./assets/images/Examenes/Paquete Tumoral/Estomago.png",
  price: "$120.000",
  sample: "Sangre",
  time: "48 horas",
  details: "Útil en seguimiento de cáncer de estómago."
},
{
  id: 13,
  name: "CEA (Colon y Pulmón)",
  desc: "Antígeno carcinoembrionario usado en tumores digestivos y pulmonares.",
  category: "Paquete Tumoral",
  img: "./assets/images/Examenes/Paquete Tumoral/Colon y Pulmon.png",
  price: "$120.000",
  sample: "Sangre",
  time: "48 horas",
  details: "Marcador para control de cáncer de colon y pulmón."
},
{
  id: 14,
  name: "PSA y PSA libre (Próstata)",
  desc: "Marcador específico para evaluación de próstata.",
  category: "Paquete Tumoral",
  img: "./assets/images/Examenes/Paquete Tumoral/PSA y PSA Libre.png",
  price: "$120.000",
  sample: "Sangre",
  time: "48 horas",
  details: "Útil para detección temprana de cáncer de próstata."
},
{
  id: 15,
  name: "AFP (Testículos e Hígado)",
  desc: "Alfafetoproteína usada en tumores hepáticos y testiculares.",
  category: "Paquete Tumoral",
  img: "./assets/images/Examenes/Paquete Tumoral/Higado y Testiculos.png",
  price: "$120.000",
  sample: "Sangre",
  time: "48 horas",
  details: "Apoya el diagnóstico de cáncer de hígado y testículo."
},
{
  id: 16,
  name: "HCG (Testículos y Mola)",
  desc: "Hormona utilizada como marcador tumoral germinal.",
  category: "Paquete Tumoral",
  img: "./assets/images/Examenes/Paquete Tumoral/Testiculos y Mola.png",
  price: "$120.000",
  sample: "Sangre",
  time: "48 horas",
  details: "Útil en tumores testiculares y enfermedad trofoblástica."
},
{
  id: 17,
  name: "Tiroglobulina (Tiroides)",
  desc: "Marcador para seguimiento de cáncer de tiroides.",
  category: "Paquete Tumoral",
  img: "./assets/images/Examenes/Paquete Tumoral/Tiroglobulina.png",
  price: "$120.000",
  sample: "Sangre",
  time: "48 horas",
  details: "Se utiliza tras cirugía de tiroides para control oncológico."
},

/* Paquete Diabetes */
  {
  id: 18,
  name: "Glucosa",
  desc: "Mide la cantidad de glucosa presente en la sangre en ayunas.",
  category: "Paquete Diabetes",
  img: "./assets/images/Examenes/Paquete Diabetes/Glucosa.png",
  price: "$25.000",
  sample: "Sangre",
  time: "24 horas",
  details: "Prueba inicial para detección y control de diabetes."
},
{
  id: 19,
  name: "Hemoglobina",
  desc: "Evalúa la concentración de hemoglobina para detectar anemia o alteraciones sanguíneas.",
  category: "Paquete Diabetes",
  img: "./assets/images/Examenes/Paquete Diabetes/Hemoglobina.png",
  price: "$25.000",
  sample: "Sangre",
  time: "24 horas",
  details: "Complementa la valoración integral del paciente diabético."
},
{
  id: 20,
  name: "Glicosilada (HbA1c)",
  desc: "Refleja el promedio de glucosa en sangre durante los últimos 3 meses.",
  category: "Paquete Diabetes",
  img: "./assets/images/Examenes/Paquete Diabetes/Glicosilada.png",
  price: "$25.000",
  sample: "Sangre",
  time: "24 horas",
  details: "Examen clave para seguimiento y control de diabetes."
},
{
  id: 21,
  name: "Insulina",
  desc: "Mide el nivel de insulina producido por el páncreas.",
  category: "Paquete Diabetes",
  img: "./assets/images/Examenes/Paquete Diabetes/Insulina.png",
  price: "$25.000",
  sample: "Sangre",
  time: "24 horas",
  details: "Permite evaluar resistencia a la insulina."
},
{
  id: 22,
  name: "Microalbuminuria",
  desc: "Detecta pequeñas cantidades de albúmina en la orina.",
  category: "Paquete Diabetes",
  img: "./assets/images/Examenes/Paquete Diabetes/Microalbuminuria.png",
  price: "$25.000",
  sample: "Orina",
  time: "24 horas",
  details: "Identifica daño renal temprano por diabetes."
},
  /* Examenes de Laboratorio */
  {
  id: 23,
  name: "Perfil Hemático",
  desc: "Conjunto de pruebas que evalúan los componentes celulares de la sangre.",
  category: "Examenes de Laboratorio",
  img: "./assets/images/Examenes/Examenes de Laboratorio/Perfil Hematico.png",
  price: "$25.000",
  sample: "Sangre",
  time: "24 horas",
  details: "Permite detectar anemia, infecciones y alteraciones sanguíneas."
},
{
  id: 24,
  name: "Hemograma",
  desc: "Analiza glóbulos rojos, blancos y plaquetas.",
  category: "Examenes de Laboratorio",
  img: "./assets/images/Examenes/Examenes de Laboratorio/Hemograma.png",
  price: "$25.000",
  sample: "Sangre",
  time: "24 horas",
  details: "Útil para diagnosticar anemias, infecciones y trastornos de coagulación."
},
{
  id: 25,
  name: "Hierro",
  desc: "Mide la cantidad de hierro circulante en la sangre.",
  category: "Examenes de Laboratorio",
  img: "./assets/images/Examenes/Examenes de Laboratorio/Hierro.png",
  price: "$25.000",
  sample: "Sangre",
  time: "24 horas",
  details: "Ayuda a identificar deficiencia o sobrecarga de hierro."
},
{
  id: 26,
  name: "Ferritina",
  desc: "Evalúa las reservas de hierro almacenadas en el cuerpo.",
  category: "Examenes de Laboratorio",
  img: "./assets/images/Examenes/Examenes de Laboratorio/Ferritina.png",
  price: "$25.000",
  sample: "Sangre",
  time: "24 horas",
  details: "Examen clave para confirmar anemia ferropénica."
},
{
  id: 27,
  name: "Transferina",
  desc: "Proteína encargada de transportar el hierro en la sangre.",
  category: "Examenes de Laboratorio",
  img: "./assets/images/Examenes/Examenes de Laboratorio/Transferina.png",
  price: "$25.000",
  sample: "Sangre",
  time: "24 horas",
  details: "Complementa el estudio de anemias y metabolismo del hierro."
},

  /* Salud de la mujer */
{
  id: 29,
  name: "Citología en capa fina",
  desc: "Método más preciso para evaluar células del cuello uterino.",
  category: "Salud de la mujer",
  img: "./assets/images/Examenes/Salud de la Mujer/Citologia en capa fina.png",
  price: "$25.000",
  sample: "Secreción cervical",
  time: "24 horas",
  details: "Mejora la calidad del diagnóstico citológico."
},
{
  id: 30,
  name: "Frotis vaginal",
  desc: "Estudio microscópico de secreción vaginal.",
  category: "Salud de la mujer",
  img: "./assets/images/Examenes/Salud de la Mujer/Frotis vaginal.png",
  price: "$25.000",
  sample: "Secreción vaginal",
  time: "24 horas",
  details: "Detecta infecciones como hongos o bacterias."
},
{
  id: 31,
  name: "VPH",
  desc: "Prueba para detectar el Virus del Papiloma Humano.",
  category: "Salud de la mujer",
  img: "./assets/images/Examenes/Salud de la Mujer/VPH.png",
  price: "$25.000",
  sample: "Secreción cervical",
  time: "24 horas",
  details: "Identifica tipos de VPH de alto riesgo."
},
{
  id: 32,
  name: "FSH",
  desc: "Hormona que regula el ciclo menstrual y la ovulación.",
  category: "Salud de la mujer",
  img: "./assets/images/Examenes/Salud de la Mujer/FSH.png",
  price: "$25.000",
  sample: "Sangre",
  time: "24 horas",
  details: "Evalúa fertilidad y función ovárica."
},
{
  id: 33,
  name: "LH",
  desc: "Hormona luteinizante relacionada con la ovulación.",
  category: "Salud de la mujer",
  img: "./assets/images/Examenes/Salud de la Mujer/LI-H.png",
  price: "$25.000",
  sample: "Sangre",
  time: "24 horas",
  details: "Útil en estudios de fertilidad."
},
{
  id: 34,
  name: "Prolactina",
  desc: "Hormona relacionada con producción de leche materna.",
  category: "Salud de la mujer",
  img: "./assets/images/Examenes/Salud de la Mujer/Prolactina.png",
  price: "$25.000",
  sample: "Sangre",
  time: "24 horas",
  details: "Su aumento puede alterar el ciclo menstrual."
},
{
  id: 35,
  name: "Estradiol",
  desc: "Principal hormona femenina producida por los ovarios.",
  category: "Salud de la mujer",
  img: "./assets/images/Examenes/Salud de la Mujer/Estradiol.png",
  price: "$25.000",
  sample: "Sangre",
  time: "24 horas",
  details: "Evalúa función ovárica y menopausia."
},
{
  id: 36,
  name: "Progesterona",
  desc: "Hormona clave en el ciclo menstrual y embarazo.",
  category: "Salud de la mujer",
  img: "./assets/images/Examenes/Salud de la Mujer/",
  price: "$25.000",
  sample: "Sangre",
  time: "24 horas",
  details: "Confirma ovulación y apoyo a la gestación."
},

  /* Salud del Hombre */

  {
  id: 37,
  name: "Testosterona",
  desc: "Mide el nivel de testosterona, principal hormona masculina.",
  category: "Salud del Hombre",
  img: "./assets/images/Examenes/Salud del Hombre/Testosterona.png",
  price: "$25.000",
  sample: "Sangre",
  time: "24 horas",
  details: "Útil para evaluar disminución del deseo sexual, fertilidad y fatiga."
},
{
  id: 38,
  name: "PSA",
  desc: "Antígeno prostático específico para evaluar la próstata.",
  category: "Salud del Hombre",
  img: "./assets/images/Examenes/Salud del Hombre/PSA.png",
  price: "$25.000",
  sample: "Sangre",
  time: "24 horas",
  details: "Ayuda en la detección temprana de alteraciones prostáticas."
},
{
  id: 39,
  name: "Chequeo médico del hombre",
  desc: "Perfil integral para evaluar el estado general de salud masculina.",
  category: "Salud del Hombre",
  img: "./assets/images/Examenes/Salud del Hombre/Chequeo medico del hombre.png",
  price: "$25.000",
  sample: "Sangre y orina",
  time: "24 horas",
  details: "Incluye pruebas metabólicas, hormonales y prostáticas."
},

    /* Salud Sexual */

  {
  id: 40,
  name: "Panel Pcr 13 patógenos Clamidya",
  desc: "Urocultivo para detección de infecciones del tracto urinario en hombres.",
  category: "Salud sexual",
  img: "./assets/images/Examenes/Salud Sexual/Clamidia.png",
  price: "$25.000",
  sample: "Orina",
  time: "24 horas",
  details: "Identifica bacterias asociadas a uretritis."
},
{
  id: 41,
  name: "Trichomonas vaginales",
  desc: "Urocultivo para detección de infecciones urinarias en mujeres.",
  category: "Salud sexual",
  img: "./assets/images/Examenes/Salud Sexual/Trichomonas vaginales.png",
  price: "$25.000",
  sample: "Orina",
  time: "24 horas",
  details: "Apoya el diagnóstico de infecciones urinarias."
},
{
  id: 42,
  name: "Ureplasm  parvun",
  desc: "Prueba para detectar infección por Chlamydia trachomatis.",
  category: "Salud sexual",
  img: "./assets/images/Examenes/Salud Sexual/Ureplasm  parvun.png",
  price: "$25.000",
  sample: "Secreción genital u orina",
  time: "24 horas",
  details: "Infección de transmisión sexual frecuente y tratable."
},
{
  id: 43,
  name: "Mycoplasma genitalium",
  desc: "Detecta la bacteria Neisseria gonorrhoeae.",
  category: "Salud sexual",
  img: "./assets/images/Examenes/Salud Sexual/Mycoplasma genitalium.png",
  price: "$25.000",
  sample: "Secreción genital u orina",
  time: "24 horas",
  details: "Causa uretritis y flujo genital."
},
{
  id: 44,
  name: "Mycoplasma hominis",
  desc: "Prueba para identificar virus herpes simple tipo 1 y 2.",
  category: "Salud sexual",
  img: "./assets/images/Examenes/Salud Sexual/Mycoplasma hominis.png",
  price: "$25.000",
  sample: "Sangre o muestra de lesión",
  time: "24 horas",
  details: "Útil ante presencia de úlceras genitales."
},
{
  id: 45,
  name: "Ureaplasma Urealyticom",
  desc: "Detecta el parásito Trichomonas vaginalis.",
  category: "Salud sexual",
  img: "./assets/images/Examenes/Salud Sexual/Ureaplasma Urealyticom.png",
  price: "$25.000",
  sample: "Secreción vaginal o uretral",
  time: "24 horas",
  details: "Causa flujo, ardor e irritación genital."
},
{
  id: 46,
  name: "Haemophylus ducreyi",
  desc: "Identifica la bacteria asociada a vaginosis bacteriana.",
  category: "Salud sexual",
  img: "./assets/images/Examenes/Salud Sexual/Haemophylus ducreyi.png",
  price: "$25.000",
  sample: "Secreción vaginal",
  time: "24 horas",
  details: "Frecuente causa de mal olor vaginal."
},
{
  id: 47,
  name: "Gardenela Vaginal",
  desc: "Prueba serológica para detectar Treponema pallidum.",
  category: "Salud sexual",
  img: "./assets/images/Examenes/Salud Sexual/Gardenela Vaginal.png",
  price: "$25.000",
  sample: "Sangre",
  time: "24 horas",
  details: "Enfermedad de transmisión sexual tratable."
},
{
  id: 75,
  name: "Candida albicans",
  desc: "Prueba serológica para detectar Treponema pallidum.",
  category: "Salud sexual",
  img: "./assets/images/Examenes/Salud Sexual/Candida albicans.png",
  price: "$25.000",
  sample: "Sangre",
  time: "24 horas",
  details: "Enfermedad de transmisión sexual tratable."
},
{
  id: 76,
  name: "Treponema plidum",
  desc: "Prueba serológica para detectar Treponema pallidum.",
  category: "Salud sexual",
  img: "./assets/images/Examenes/Salud Sexual/Treponema plidum.png",
  price: "$25.000",
  sample: "Sangre",
  time: "24 horas",
  details: "Enfermedad de transmisión sexual tratable."
},
{
  id: 77,
  name: "Herpes simple I",
  desc: "Prueba serológica para detectar Treponema pallidum.",
  category: "Salud sexual",
  img: "./assets/images/Examenes/Salud Sexual/Herpes simple I.png",
  price: "$25.000",
  sample: "Sangre",
  time: "24 horas",
  details: "Enfermedad de transmisión sexual tratable."
},
{
  id: 78,
  name: "Herpes simple II",
  desc: "Prueba serológica para detectar Treponema pallidum.",
  category: "Salud sexual",
  img: "./assets/images/Examenes/Salud Sexual/Herpes simple II.png",
  price: "$25.000",
  sample: "Sangre",
  time: "24 horas",
  details: "Enfermedad de transmisión sexual tratable."
},
{
  id: 79,
  name: "Neiseria gonorrea",
  desc: "Prueba serológica para detectar Treponema pallidum.",
  category: "Salud sexual",
  img: "./assets/images/Examenes/Salud Sexual/Gonorrea.png",
  price: "$25.000",
  sample: "Sangre",
  time: "24 horas",
  details: "Enfermedad de transmisión sexual tratable."
},

  /* Genetica */

 {
  id: 48,
  name: "Pruebas de paternidad",
  desc: "Análisis de ADN para determinar relación biológica entre padre e hijo.",
  category: "Genética",
  img: "./assets/images/Examenes/Genetica/paternidad.png",
  price: "$25.000",
  sample: "Sangre o hisopado bucal",
  time: "24 horas",
  details: "Comparación de marcadores genéticos con alta precisión."
},
{
  id: 49,
  name: "Cariotipo de bandeo [G, R y C]",
  desc: "Estudio cromosómico para detectar alteraciones numéricas o estructurales.",
  category: "Genética",
  img: "./assets/images/Examenes/Genetica/careotipo de bandeo.png",
  price: "$25.000",
  sample: "Sangre",
  time: "24 horas",
  details: "Útil en infertilidad, abortos recurrentes y síndromes genéticos."
},
{
  id: 50,
  name: "PCR en tiempo real",
  desc: "Técnica molecular para detectar material genético específico.",
  category: "Genética",
  img: "./assets/images/Examenes/Genetica/PCR en tiempo real.png",
  price: "$25.000",
  sample: "Sangre, hisopado u otras muestras",
  time: "24 horas",
  details: "Permite diagnóstico de infecciones y estudios genéticos."
},

  /* Salud Ocupacional */

 {
  id: 51,
  name: "Examen de ingreso",
  desc: "Valoración médica para determinar aptitud antes de iniciar labores.",
  category: "Salud Ocupacional",
  img: "./assets/images/Examenes/Salud Ocupacional/Examen de ingreso.png",
  price: "$25.000",
  sample: "Según protocolo",
  time: "24 horas",
  details: "Incluye evaluación clínica acorde al cargo."
},
{
  id: 52,
  name: "Examen preingreso",
  desc: "Evaluación del estado de salud previo a contratación.",
  category: "Salud Ocupacional",
  img: "./assets/images/Examenes/Salud Ocupacional/Examen preingreso.png",
  price: "$25.000",
  sample: "Según protocolo",
  time: "24 horas",
  details: "Determina condiciones para el desempeño laboral."
},
{
  id: 53,
  name: "Examen periódico",
  desc: "Control de salud para trabajadores activos.",
  category: "Salud Ocupacional",
  img: "./assets/images/Examenes/Salud Ocupacional/Examen periodico.png",
  price: "$25.000",
  sample: "Según protocolo",
  time: "24 horas",
  details: "Monitorea efectos del trabajo en la salud."
},
{
  id: 54,
  name: "Examen de retiro",
  desc: "Valoración al finalizar la relación laboral.",
  category: "Salud Ocupacional",
  img: "./assets/images/Examenes/Salud Ocupacional/Examen de retiro.png",
  price: "$25.000",
  sample: "Según protocolo",
  time: "24 horas",
  details: "Establece condiciones de salud al egreso."
},
{
  id: 55,
  name: "Examen post incapacidad y seguimientos",
  desc: "Evaluación para reintegro laboral tras incapacidad.",
  category: "Salud Ocupacional",
  img: "./assets/images/Examenes/Salud Ocupacional/Examen post incapacidad.png",
  price: "$25.000",
  sample: "Según protocolo",
  time: "24 horas",
  details: "Define recomendaciones y restricciones."
},
{
  id: 56,
  name: "Toma de muestras",
  desc: "Servicio de recolección de muestras biológicas.",
  category: "Salud Ocupacional",
  img: "./assets/images/Examenes/Salud Ocupacional/Toma de muestras.png",
  price: "$25.000",
  sample: "Sangre, orina u otras",
  time: "24 horas",
  details: "Proceso técnico para análisis de laboratorio."
},
{
  id: 57,
  name: "Manipulación de alimentos",
  desc: "Certificación médica para personal manipulador.",
  category: "Salud Ocupacional",
  img: "./assets/images/Examenes/Salud Ocupacional/Manipulacion de alimentos.png",
  price: "$25.000",
  sample: "Según protocolo",
  time: "24 horas",
  details: "Cumple normativa sanitaria vigente."
},
{
  id: 73,
  name: "Curso trabajo en altura para mayores de 40 años",
  desc: "Certificación médica para personal manipulador.",
  category: "Salud Ocupacional",
  img: "./assets/images/Examenes/Salud Ocupacional/Curso trabajo mayores 40 años.png",
  price: "$25.000",
  sample: "Según protocolo",
  time: "24 horas",
  details: "Cumple normativa sanitaria vigente."
},
{
  id: 74,
  name: "Curso trabajo en altura para menores de 40 años",
  desc: "Certificación médica para personal manipulador.",
  category: "Salud Ocupacional",
  img: "./assets/images/Examenes/Salud Ocupacional/Curso trabajo menores 40 años.png",
  price: "$25.000",
  sample: "Según protocolo",
  time: "24 horas",
  details: "Cumple normativa sanitaria vigente."
},
  
  /* Prueba de fertilidad */

   {
  id: 58,
  name: "Espermograma basico <b>Hombre</b>",
  desc: "Mide los niveles de estradiol, una de las principales hormonas femeninas responsables del desarrollo ovárico y la ovulación.",
  category: "Prueba de Fertilidad",
  img: "./assets/images/Examenes/Prueba de Fertilidad/Espermograma hombre.png",
  price: "$25.000",
  sample: "Sangre",
  time: "24 horas",
  details: "Permite evaluar la función ovárica y determinar el momento adecuado del ciclo menstrual."
},
{
  id: 59,
  name: "Testosterona <b>Hombre</b>",
  desc: "Evalúa los niveles de prolactina, hormona relacionada con la producción de leche y la regulación del ciclo menstrual.",
  category: "Prueba de Fertilidad",
  img: "./assets/images/Examenes/Prueba de Fertilidad/Testosterona hombre.png",
  price: "$25.000",
  sample: "Sangre",
  time: "24 horas",
  details: "Niveles elevados pueden afectar la ovulación y dificultar la fertilidad."
},
{
  id: 60,
  name: "Careotipo [G,Q] <b>Hombre</b>",
  desc: "Mide la hormona progesterona para confirmar si ocurrió la ovulación y evaluar la fase lútea del ciclo.",
  category: "Prueba de Fertilidad",
  img: "./assets/images/Examenes/Prueba de Fertilidad/Careotipo G, Q hombre.png",
  price: "$25.000",
  sample: "Sangre",
  time: "24 horas",
  details: "Es clave para determinar la capacidad del útero para mantener un embarazo."
},
{
  id: 61,
  name: "FSH <b>Hombre</b>",
  desc: "Determina la reserva ovárica midiendo la cantidad de óvulos disponibles en los ovarios.",
  category: "Prueba de Fertilidad",
  img: "./assets/images/Examenes/Prueba de Fertilidad/FSH hombre.png",
  price: "$25.000",
  sample: "Sangre",
  time: "24 horas",
  details: "Ayuda a predecir la respuesta a tratamientos de fertilidad."
},
{
  id: 62,
  name: "LH <b>Hombre</b>",
  desc: "Analiza la calidad del semen evaluando cantidad, movilidad y forma de los espermatozoides.",
  category: "Prueba de Fertilidad",
  img: "./assets/images/Examenes/Prueba de Fertilidad/LH hombre.png",
  price: "$25.000",
  sample: "Semen",
  time: "24 horas",
  details: "Permite detectar posibles causas de infertilidad masculina."
},
{
  id: 63,
  name: "LH <b>Mujer</b>",
  desc: "Mide la hormona responsable de desencadenar la ovulación en la mujer.",
  category: "Prueba de Fertilidad",
  img: "./assets/images/Examenes/Prueba de Fertilidad/LH mujer.png",
  price: "$25.000",
  sample: "Sangre",
  time: "24 horas",
  details: "Se utiliza para identificar el momento fértil del ciclo."
},
{
  id: 64,
  name: "FSH <b>Mujer</b>",
  desc: "Evalúa la hormona encargada de estimular el crecimiento de los folículos ováricos.",
  category: "Prueba de Fertilidad",
  img: "./assets/images/Examenes/Prueba de Fertilidad/FSH mujer.png",
  price: "$25.000",
  sample: "Sangre",
  time: "24 horas",
  details: "Es fundamental para valorar la reserva ovárica y la función reproductiva."
},
{
  id: 80,
  name: "Hormona Antimulleriana <b>Mujer</b>",
  desc: "Evalúa la hormona encargada de estimular el crecimiento de los folículos ováricos.",
  category: "Prueba de Fertilidad",
  img: "./assets/images/Examenes/Prueba de Fertilidad/Hormona antimulleriana mujer.png",
  price: "$25.000",
  sample: "Sangre",
  time: "24 horas",
  details: "Es fundamental para valorar la reserva ovárica y la función reproductiva."
},
{
  id: 81,
  name: "Progesterona <b>Mujer</b>",
  desc: "Evalúa la hormona encargada de estimular el crecimiento de los folículos ováricos.",
  category: "Prueba de Fertilidad",
  img: "./assets/images/Examenes/Prueba de Fertilidad/Progesterona mujer.png",
  price: "$25.000",
  sample: "Sangre",
  time: "24 horas",
  details: "Es fundamental para valorar la reserva ovárica y la función reproductiva."
},
{
  id: 82,
  name: "Prolactina <b>Mujer</b>",
  desc: "Evalúa la hormona encargada de estimular el crecimiento de los folículos ováricos.",
  category: "Prueba de Fertilidad",
  img: "./assets/images/Examenes/Prueba de Fertilidad/Prolactina mujer.png",
  price: "$25.000",
  sample: "Sangre",
  time: "24 horas",
  details: "Es fundamental para valorar la reserva ovárica y la función reproductiva."
},
{
  id: 83,
  name: "Estradiol <b>Mujer</b>",
  desc: "Evalúa la hormona encargada de estimular el crecimiento de los folículos ováricos.",
  category: "Prueba de Fertilidad",
  img: "./assets/images/Examenes/Prueba de Fertilidad/Estradiol mujer.png",
  price: "$25.000",
  sample: "Sangre",
  time: "24 horas",
  details: "Es fundamental para valorar la reserva ovárica y la función reproductiva."
},

  /* Paquete Rutinario */

 {
  id: 65,
  name: "Glicemia",
  desc: "Mide la cantidad de glucosa presente en la sangre para evaluar el metabolismo de los azúcares.",
  category: "Paquete Rutinario",
  img: "./assets/images/Examenes/Paquete Rutinario/Glicemia.png",
  price: "$25.000",
  sample: "Sangre",
  time: "24 horas",
  details: "Se utiliza para el diagnóstico y control de diabetes o prediabetes."
},
{
  id: 66,
  name: "Colesterol",
  desc: "Evalúa el nivel total de colesterol en sangre, relacionado con la salud cardiovascular.",
  category: "Paquete Rutinario",
  img: "./assets/images/Examenes/Paquete Rutinario/Colesterol.png",
  price: "$25.000",
  sample: "Sangre",
  time: "24 horas",
  details: "Permite identificar riesgo de enfermedades del corazón y arterias."
},
{
  id: 67,
  name: "Triglicéridos",
  desc: "Mide la cantidad de grasas circulantes en la sangre provenientes de la alimentación.",
  category: "Paquete Rutinario",
  img: "./assets/images/Examenes/Paquete Rutinario/Trigliceridos.png",
  price: "$25.000",
  sample: "Sangre",
  time: "24 horas",
  details: "Valores altos se asocian con riesgo cardiovascular y síndrome metabólico."
},
{
  id: 68,
  name: "Hemograma (Cuadro Hemático)",
  desc: "Analiza las células de la sangre como glóbulos rojos, blancos y plaquetas.",
  category: "Paquete Rutinario",
  img: "./assets/images/Examenes/Paquete Rutinario/Hemograma.png",
  price: "$25.000",
  sample: "Sangre",
  time: "24 horas",
  details: "Permite detectar anemia, infecciones y alteraciones hematológicas."
},

   /* Perfil Hepatico */

  {
  id: 69,
  name: "Transaminasas [ALT, AST]",
  desc: "Evalúa las enzimas ALT y AST para detectar inflamación o daño en el hígado.",
  category: "Perfil Hepatico",
  img: "./assets/images/Examenes/Perfil Hepatico/Transaminasas.png",
  price: "$25.000",
  sample: "Sangre",
  time: "24 horas",
  details: "Útil para diagnosticar hepatitis, hígado graso, daño por alcohol o medicamentos y enfermedades hepáticas."
},
{
  id: 70,
  name: "Bilirrubina",
  desc: "Mide el nivel de bilirrubina para evaluar la función del hígado y las vías biliares.",
  category: "Perfil Hepatico",
  img: "./assets/images/Examenes/Perfil Hepatico/Bilirrubina.png",
  price: "$25.000",
  sample: "Sangre",
  time: "24 horas",
  details: "Permite detectar ictericia, obstrucción biliar, cálculos en vesícula o alteraciones hepáticas."
},
{
  id: 71,
  name: "Fosfatasa Alcalina",
  desc: "Enzima relacionada con el hígado, vías biliares y sistema óseo.",
  category: "Perfil Hepatico",
  img: "./assets/images/Examenes/Perfil Hepatico/Fosfata alcalina.png",
  price: "$25.000",
  sample: "Sangre",
  time: "24 horas",
  details: "Se eleva en obstrucción biliar, enfermedades del hígado y alteraciones óseas."
},
{
  id: 72,
  name: "GGT",
  desc: "Enzima sensible para detectar daño hepático y de vías biliares.",
  category: "Perfil Hepatico",
  img: "./assets/images/Examenes/Perfil Hepatico/GGT.png",
  price: "$25.000",
  sample: "Sangre",
  time: "24 horas",
  details: "Indicador de afectación por alcohol, medicamentos, hígado graso u obstrucción biliar."
},
];

/* =========================
   CONSTANTES GLOBALES
   ========================= */
const WHATSAPP_NUMBER = "+573113212221";

/* Possible element IDs used in different HTML variants:
   - exam-list (used by earlier app code)
   - examenes (used by grid/list code)
   Chat elements:
   - chatbox, chat-toggle, chat-close, input, chat-messages, send
   We'll attempt to bind to whichever exist.
*/

/* =========================
   HELPERS / UTILIDADES
   ========================= */
function formatCurrency(num) {
  if (num === undefined || num === null) return "-";
  return new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP" }).format(num);
}
function truncate(text, len = 120) {
  if (!text) return "";
  return text.length > len ? text.slice(0, len).trim() + "…" : text;
}
function escapeHtml(s) {
  if (s === undefined || s === null) return "";
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/* =========================
   DOM ELEMENT REFERENCES (robust selectors)
   ========================= */
const el = {
  // exam containers (support both 'exam-list' and 'examenes')
  examList: document.getElementById("exam-list") || document.getElementById("examenes") || null,
  // category list (ul)
  categoryList: document.getElementById("category-list") || null,
  // search input
  searchInput: document.getElementById("search-input") || null,
  // compare footer + buttons + modal
  bottomCompareInfo: document.getElementById("bottom-compare-info") || null,
  compareBtn: document.getElementById("compare-btn") || null,
  footerRequestBtn: document.getElementById("modal-request") || null,
  compareModal: document.getElementById("compare-modal") || null,
  compareModalBody: document.getElementById("modal-body") || null,
  // detail modal
  detailModal: document.getElementById("detail-modal") || null,
  detailImg: document.getElementById("detail-img") || null,
  detailBody: document.getElementById("detail-body") || null,
  detailWhatsappBtn: document.getElementById("detail-whatsapp") || null,
  // grid/list toggle
  vistaGridBtn: document.getElementById("vista-grid") || null,
  vistaListBtn: document.getElementById("vista-list") || null,
  examenesContainer: document.getElementById("examenes") || document.getElementById("exam-list") || null,
  // chat elements (multiple html versions supported)
  chatBox: document.getElementById("chatbox") || null,
  chatToggle: document.getElementById("chat-toggle") || null,
  chatClose: document.getElementById("chat-close") || null,
  chatInput: document.getElementById("input") || document.getElementById("chat-input") || null,
  chatMessages: document.getElementById("chat-messages") || null,
  chatSend: document.getElementById("send") || null
};

/* =========================
   STATE
   ========================= */
const state = {
  currentView: "grid", // 'grid' or 'list'
  compareSet: new Set()
};

/* =========================
   INICIALIZACIÓN AL CARGAR DOM
   ========================= */
document.addEventListener("DOMContentLoaded", () => {
  // initial render: use examList (if exists) or examenesContainer
  renderExams(examData);

  // category counters if categoryList exists
  if (el.categoryList) updateCategoryCounters(examData);

  // setup interactions
  setupCategoryClicks();
  setupSearch();
  setupDetailModalLogic();
  setupCompareLogic();
  setupGridListToggle();
  setupChatIntegration(); // Taboplus chat (auto open, history, sound)
});

/* =========================
   RENDERIZADO UNIVERSAL DE EXÁMENES
   - this function writes into el.examList (or el.examenesContainer)
   - it respects current view: grid / list (class on container)
   ========================= */
function renderExams(data) {
  const container = el.examenesContainer;
  if (!container) return;

  // ensure correct class exists for layout
  if (state.currentView === "grid") {
    container.classList.remove("lista");
    container.classList.add("cuadricula");
  } else {
    container.classList.remove("cuadricula");
    container.classList.add("lista");
  }

  container.innerHTML = ""; // clear

  if (!data || data.length === 0) {
    const p = document.createElement("p");
    p.textContent = "No se encontraron exámenes.";
    container.appendChild(p);
    return;
  }

  // create cards (structure works for both grid and list styles)
  data.forEach(exam => {
    const card = document.createElement("div");
    card.className = "examen-card exam-item";
    card.dataset.id = exam.id;

    // fallback image
    const imgSrc = exam.img || "https://via.placeholder.com/300x180?text=Examen";

    // inner HTML for card
    card.innerHTML = `
      <div class="card-media">
        <img src="${imgSrc}" alt="${escapeHtml(exam.name)}" class="card-img" />
      </div>
      <div class="card-body">
        <h3 class="card-title">${escapeHtml(exam.name)}</h3>
        <p class="card-desc">${escapeHtml(truncate(exam.desc, 160))}</p>
        <div class="card-meta">
          <small><b>Preparación:</b> ${escapeHtml(exam.prep || "No requiere")}</small><br/>
          <small><b>Entrega:</b> ${escapeHtml(exam.time)}</small> · <small><b>Precio:</b> ${formatCurrency(exam.price)}</small>
        </div>
        <div class="card-actions">
          <button class="btn btn-detail" data-id="${exam.id}">Detalle</button>
          <button class="btn btn-compare" data-id="${exam.id}">Comparar</button>
          <button class="btn btn-ws" data-id="${exam.id}">Solicitar</button>
        </div>
      </div>
    `;

    // append to container
    container.appendChild(card);
  });

  // attach event listeners on generated buttons
  container.querySelectorAll(".btn-detail").forEach(b => b.addEventListener("click", e => {
    const id = Number(e.currentTarget.dataset.id);
    openDetailModal(id);
  }));
  container.querySelectorAll(".btn-compare").forEach(b => b.addEventListener("click", e => {
    const id = Number(e.currentTarget.dataset.id);
    toggleCompare(id);
  }));
  container.querySelectorAll(".btn-ws").forEach(b => b.addEventListener("click", e => {
    const id = Number(e.currentTarget.dataset.id);
    openWhatsAppForExam(id);
  }));
}

/* =========================
   CONTADORES POR CATEGORÍA
   - updateCategoryCounters: writes counts into <li><span> inside categoryList
   ========================= */
function updateCategoryCounters(data) {
  if (!el.categoryList) return;
  const lis = el.categoryList.querySelectorAll("li");
  lis.forEach(li => {
    const cat = li.dataset.category || "all";
    const count = (cat === "all") ? data.length : data.filter(x => x.category === cat).length;
    // ensure there is a span (assumes <li>Title <span></span></li>)
    let span = li.querySelector("span");
    if (!span) {
      span = document.createElement("span");
      li.appendChild(span);
    }
    span.textContent = ` (${count})`;
  });
}

/* =========================
   FILTROS POR CATEGORÍA (clic)
   - if no categoryList in DOM, this does nothing
   ========================= */
function setupCategoryClicks() {
  if (!el.categoryList) return;
  const lis = el.categoryList.querySelectorAll("li");
  lis.forEach(li => {
    li.addEventListener("click", () => {
      // toggle active
      lis.forEach(x => x.classList.remove("active"));
      li.classList.add("active");

      const cat = li.dataset.category || "all";
      if (cat === "all") {
        renderExams(examData);
        updateCategoryCounters(examData);
      } else {
        const filtered = examData.filter(e => e.category === cat);
        renderExams(filtered);
        updateCategoryCounters(filtered);
      }
    });
  });
}

/* =========================
   BUSCADOR (input listening)
   - if no searchInput in DOM, this does nothing
   ========================= */
function setupSearch() {
  const input = el.searchInput;
  if (!input) return;

  let timer = null;
  input.addEventListener("input", (e) => {
    const q = e.target.value.toLowerCase().trim();
    clearTimeout(timer);
    timer = setTimeout(() => {
      const filtered = examData.filter(ex =>
        ex.name.toLowerCase().includes(q) ||
        ex.desc.toLowerCase().includes(q) ||
        (ex.category || "").toLowerCase().includes(q)
      );
      renderExams(filtered);
      updateCategoryCounters(filtered);
    }, 180);
  });
}

/* =========================
   GRID / LIST TOGGLE
   - supports buttons with ids: vista-grid, vista-list
   - if buttons missing, tries to react to chat commands that requested change
   ========================= */
function setupGridListToggle() {
  const btnGrid = el.vistaGridBtn;
  const btnList = el.vistaListBtn;
  const container = el.examenesContainer;
  if (!container) return;

  // init classes
  if (state.currentView === "grid") {
    container.classList.add("cuadricula");
    container.classList.remove("lista");
  } else {
    container.classList.add("lista");
    container.classList.remove("cuadricula");
  }

  function setView(view) {
    state.currentView = view;
    if (view === "grid") {
      container.classList.remove("lista");
      container.classList.add("cuadricula");
    } else {
      container.classList.remove("cuadricula");
      container.classList.add("lista");
    }
    // update active class on buttons
    if (btnGrid) btnGrid.classList.toggle("active", view === "grid");
    if (btnList) btnList.classList.toggle("active", view === "list");
  }

  // bind ui buttons if they exist
  if (btnGrid) btnGrid.addEventListener("click", () => setView("grid"));
  if (btnList) btnList.addEventListener("click", () => setView("list"));
}

/* =========================
   MODAL DETALLE
   ========================= */
function setupDetailModalLogic() {
  const modal = el.detailModal;
  if (!modal) return;
  const closeBtn = document.getElementById("close-detail") || document.getElementById("detail-close") || null;

  if (closeBtn) closeBtn.addEventListener("click", () => modal.style.display = "none");
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  // detail whatsapp button handled in openDetailModal (uses el.detailWhatsappBtn if present)
}

function openDetailModal(id) {
  const modal = el.detailModal;
  if (!modal) {
    // fallback: show alert
    const ex = examData.find(x => x.id === id);
    alert(`${ex.name}\n\n${ex.desc}\n\nPreparación: ${ex.prep}\nEntrega: ${ex.time}\nPrecio: ${formatCurrency(ex.price)}`);
    return;
  }

  const ex = examData.find(x => x.id === id);
  if (!ex) return;

  if (el.detailImg) el.detailImg.src = ex.img || "https://via.placeholder.com/150";
  if (el.detailBody) {
    el.detailBody.innerHTML = `
      <h2>${escapeHtml(ex.name)}</h2>
      <p>${escapeHtml(ex.desc)}</p>
      <p><b>Preparación:</b> ${escapeHtml(ex.prep)}</p>
      <p><b>Entrega:</b> ${escapeHtml(ex.time)}</p>
      <p><b>Precio:</b> ${formatCurrency(ex.price)}</p>
      <div style="margin-top:10px;">
        <button class="btn" id="detail-ws-btn">Solicitar por WhatsApp</button>
      </div>
    `;
    // attach whatsapp handler
    const bw = document.getElementById("detail-ws-btn");
    if (bw) bw.addEventListener("click", () => openWhatsAppForExam(id));
  }

  modal.dataset.currentId = id;
  modal.style.display = "block";
}

/* =========================
   WHATSAPP helpers
   ========================= */
function openWhatsAppForExam(idOrExam) {
  // accept either id or exam object
  const ex = typeof idOrExam === "number" ? examData.find(e => e.id === idOrExam) : idOrExam;
  if (!ex) return;
  const txt = encodeURIComponent(
    `Hola, deseo información del examen "${ex.name}".\n\nDescripción: ${ex.desc}\nPreparación: ${ex.prep}\nTiempo: ${ex.time}\nPrecio: ${formatCurrency(ex.price)}`
  );
  window.open(`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g,'')}?text=${txt}`, "_blank");
}

function openWhatsAppForMultiple(exams) {
  if (!exams || !exams.length) return;
  let text = "Hola, deseo información sobre los siguientes exámenes:\n";
  exams.forEach(ex => {
    text += `\n- ${ex.name} (${formatCurrency(ex.price)}) - ${ex.time}`;
  });
  window.open(`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g,'')}?text=${encodeURIComponent(text)}`, "_blank");
}

/* =========================
   COMPARADOR
   ========================= */
function setupCompareLogic() {
  // compare UI elements may be missing; guard
  if (el.compareBtn) el.compareBtn.addEventListener("click", () => {
    if (state.compareSet.size < 2) return alert("Selecciona al menos 2 exámenes para comparar.");
    showCompareModal();
  });
  if (el.footerRequestBtn) el.footerRequestBtn.addEventListener("click", () => {
    const exams = [...state.compareSet].map(id => examData.find(e => e.id === id)).filter(Boolean);
    openWhatsAppForMultiple(exams);
  });
  // update footer display initially
  updateCompareFooter();
}
function toggleCompare(id) {
  if (state.compareSet.has(id)) state.compareSet.delete(id);
  else state.compareSet.add(id);
  updateCompareFooter();
}
function updateCompareFooter() {
  if (!el.bottomCompareInfo && !el.compareBtn && !el.footerRequestBtn) return;
  const count = state.compareSet.size;
  if (el.bottomCompareInfo) el.bottomCompareInfo.textContent = count ? `${count} en comparación` : "";
  if (el.compareBtn) el.compareBtn.disabled = count < 2;
  if (el.footerRequestBtn) el.footerRequestBtn.textContent = count ? `Solicitar ${count} examen(es)` : "";
}
function showCompareModal() {
  if (!el.compareModal || !el.compareModalBody) {
    // fallback: open a simple window
    const exams = [...state.compareSet].map(id => examData.find(e => e.id === id));
    let text = "Comparación:\n\n";
    exams.forEach(ex => {
      text += `${ex.name}\n  Preparación: ${ex.prep}\n  Tiempo: ${ex.time}\n  Precio: ${formatCurrency(ex.price)}\n\n`;
    });
    alert(text);
    return;
  }

  const exams = [...state.compareSet].map(id => examData.find(e => e.id === id));
  el.compareModalBody.innerHTML = `
    <div class="compare-grid">
      ${exams.map(ex => `
        <div class="compare-card">
          <h4>${escapeHtml(ex.name)}</h4>
          <p>${escapeHtml(ex.desc)}</p>
          <p><b>Preparación:</b> ${escapeHtml(ex.prep)}</p>
          <p><b>Tiempo:</b> ${escapeHtml(ex.time)}</p>
          <p><b>Precio:</b> ${formatCurrency(ex.price)}</p>
        </div>
      `).join("")}
    </div>
  `;
  el.compareModal.style.display = "block";

  // attach modal close (if modal has close button with id modal-close or close-modal)
  const modalClose = document.getElementById("modal-close") || document.getElementById("close-modal");
  if (modalClose) modalClose.addEventListener("click", () => el.compareModal.style.display = "none");
}

/* =========================
   CHAT TABOPLUS — INTEGRACIÓN COMPLETA
   - Supports older provided script features:
     * auto open on load after delay
     * save history in localStorage (chatHistorial)
     * sound notification for bot messages
     * enviar()/agregarMensaje() etc.
   ========================= */

/* sound for bot messages */
const taboSound = new Audio("https://cdn.pixabay.com/download/audio/2022/03/15/audio_f54f6c3b7b.mp3?filename=notification-3-125447.mp3");

/* Helper to add message to chat UI and optionally save */
function agregarMensaje(texto, tipo = "bot", guardar = true) {
  if (!el.chatMessages) return;
  const msg = document.createElement("div");
  msg.className = `msg ${tipo}`;
  // allow HTML in bot responses (for links)
  msg.innerHTML = texto;
  el.chatMessages.appendChild(msg);
  el.chatMessages.scrollTop = el.chatMessages.scrollHeight;

  if (tipo === "bot") {
    // play sound
    try { taboSound.play(); } catch (e) { /* ignore autoplay errors */ }
  }

  if (guardar) guardarMensaje(texto, tipo);
}

/* Save chat history item (simple array of {texto,tipo}) */
function guardarMensaje(texto, tipo) {
  try {
    const historial = JSON.parse(localStorage.getItem("chatHistorial")) || [];
    historial.push({ texto, tipo });
    localStorage.setItem("chatHistorial", JSON.stringify(historial));
  } catch (e) {
    console.warn("No se pudo guardar historial:", e);
  }
}

/* restore history on load (called by initChat) */
function restaurarHistorial() {
  if (!el.chatMessages) return;
  try {
    const historial = JSON.parse(localStorage.getItem("chatHistorial")) || [];
    historial.forEach(msg => {
      const item = document.createElement("div");
      item.className = `msg ${msg.tipo}`;
      item.innerHTML = msg.texto;
      el.chatMessages.appendChild(item);
    });
    el.chatMessages.scrollTop = el.chatMessages.scrollHeight;
  } catch (e) {
    console.warn("Error restaurando historial", e);
  }
}

/* remove history */
function reiniciarConversacion() {
  localStorage.removeItem("chatHistorial");
  localStorage.removeItem("chatIniciado");
  if (el.chatMessages) el.chatMessages.innerHTML = "";
  iniciarChat(true);
}

/* Start chat with welcome message once */
function iniciarChat(force = false) {
  if (!el.chatMessages || !el.chatBox) return;
  if (!force && localStorage.getItem("chatIniciado")) return;
  const welcome = 
    "👋 ¡Hola! Soy <b>Taboplus</b>, tu asesor virtual. ¿Qué deseas hacer?<br/><br/>" +
    "1️⃣ Consultar horarios<br/>" +
    "2️⃣ Agendar cita<br/>" +
    "3️⃣ Requisitos de exámenes<br/>" +
    "4️⃣ Resultados<br/>" +
    "5️⃣ Hablar con un agente";
  agregarMensaje(welcome, "bot");
  localStorage.setItem("chatIniciado", "1");
}

/* The main response handler (improved/responsive) */
function respuestaAutomatica(texto) {
  // basic normalization
  const t = (texto || "").toLowerCase();

  // shortcuts (numbers 1-5)
  if (t === "1" || t.includes("horario") || t.includes("hora")) {
    return "🕒 Nuestro horario de atención es:<br/>Lun-Vie: 7:00 a.m. - 4:00 p.m.<br/>Sábados: 7:00 a.m. - 12:00 p.m.<br/>Domingos y festivos con cita previa.";
  }
  if (t === "2" || t.includes("agendar") || t.includes("cita")) {
    return "📅 Puedes agendar tu cita escribiéndonos por WhatsApp al <a href='https://api.whatsapp.com/send?phone=573113212221' target='_blank'>+57 311 321 2221</a> o a través de nuestra página web.";
  }
  if (t === "3" || t.includes("requisito") || t.includes("preparaci") || t.includes("preparación")) {
    return "📋 Cada examen tiene requisitos específicos. Por ejemplo, para exámenes de sangre se recomienda ayuno de 8 horas. ¿Deseas conocer los requisitos de un examen específico?";
  }
  if (t === "4" || t.includes("resultado")) {
    return "📑 Puedes consultar tus resultados en línea o solicitarlos por WhatsApp. Generalmente están disponibles entre 24 y 48 horas después del examen.";
  }
  if (t === "5" || t.includes("agente") || t.includes("humano")) {
    return "👩‍💼 Un agente humano te atenderá en breve. También puedes contactarnos por WhatsApp aquí: <a href='https://api.whatsapp.com/send?phone=573113212221' target='_blank'>Contactar</a>.";
  }
  if (t.includes("reiniciar") || t.includes("nuevo chat")) {
    reiniciarConversacion();
    return null; // reiniciarConversacion already displays welcome
  }

  // grid/list commands
  if (t.includes("cuadr") || t.includes("grid")) {
    // switch view to grid
    if (el.vistaGridBtn) el.vistaGridBtn.classList.add("active");
    if (el.vistaListBtn) el.vistaListBtn.classList.remove("active");
    state.currentView = "grid";
    if (el.examenesContainer) {
      el.examenesContainer.classList.remove("lista");
      el.examenesContainer.classList.add("cuadricula");
    }
    return "✅ Ahora estás en vista de Cuadrícula.";
  }
  if (t.includes("lista") || t.includes("list")) {
    if (el.vistaListBtn) el.vistaListBtn.classList.add("active");
    if (el.vistaGridBtn) el.vistaGridBtn.classList.remove("active");
    state.currentView = "list";
    if (el.examenesContainer) {
      el.examenesContainer.classList.remove("cuadricula");
      el.examenesContainer.classList.add("lista");
    }
    return "✅ Ahora estás en vista de Lista.";
  }

  // attempt to detect exam name and reply specific info
  for (const ex of examData) {
    // check if message includes significant word of exam name
    const nameLower = ex.name.toLowerCase();
    const nameWords = nameLower.split(/\s+/).filter(w => w.length > 3); // longer words
    if (nameWords.some(w => t.includes(w)) || t.includes(nameLower)) {
      // return a specific, humanized response
      return `Con gusto te explico sobre <b>${escapeHtml(ex.name)}</b>.<br/><br/>` +
             `${escapeHtml(ex.desc)}<br/><br/>` +
             `<b>Preparación:</b> ${escapeHtml(ex.prep || "No requiere")}<br/>` +
             `<b>Tiempo:</b> ${escapeHtml(ex.time)} — <b>Precio aproximado:</b> ${formatCurrency(ex.price)}<br/><br/>` +
             `¿Quieres que te lo solicite por WhatsApp?`;
    }
  }

  // fallback
  return "🤖 Disculpa, no entendí del todo. Puedes escribir: 1 (horarios), 2 (agendar), 3 (requisitos), 4 (resultados), 5 (agente), o pedir que muestre la vista 'lista' o 'cuadrícula'.";
}

/* Set up chat event bindings and auto-open/historic restore */
function setupChatIntegration() {
  // if no chatBox present, do nothing
  if (!el.chatBox) return;

  // restore history
  restaurarHistorial();

  // auto-open on load with small delay (if not open)
  window.addEventListener("load", () => {
    setTimeout(() => {
      // show chat
      try { el.chatBox.style.display = "flex"; } catch (e) {}
      iniciarChat();
    }, 600);
  });

  // bind close toggle if available
  if (el.chatClose) el.chatClose.addEventListener("click", () => { el.chatBox.style.display = "none"; });

  // bind toggle button if available
  if (el.chatToggle) el.chatToggle.addEventListener("click", () => {
    if (el.chatBox.style.display === "flex") el.chatBox.style.display = "none";
    else {
      el.chatBox.style.display = "flex";
      iniciarChat();
    }
  });

  // send on Enter key for input if present
  if (el.chatInput) {
    el.chatInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") enviarChat();
    });
  }

  // bind explicit send button if exists (id 'send')
  if (el.chatSend) el.chatSend.addEventListener("click", enviarChat);
}

/* Unified send function for chat UI (compatible with older 'enviar' naming) */
function enviarChat() {
  if (!el.chatInput || !el.chatMessages) return;
  const texto = el.chatInput.value.trim();
  if (!texto) return;

  // display user message and save
  agregarMensaje(escapeHtml(texto), "user", true);

  // clear input
  el.chatInput.value = "";

  // compute bot reply
  setTimeout(() => {
    const reply = respuestaAutomatica(texto.toLowerCase());
    if (reply !== null && reply !== undefined) agregarMensaje(reply, "bot", true);
  }, 650);
}

/* Also expose a global enviar() for HTML that uses onclick="enviar()" */
function enviar() { enviarChat(); }

/* =========================
   EXPOSICIÓN GLOBAL
   ========================= */
window.App = window.App || {};
window.App.examData = examData;
window.App.renderExams = renderExams;
window.App.openDetailModal = openDetailModal;
window.App.openWhatsAppForExam = openWhatsAppForExam;
window.App.toggleCompare = toggleCompare;
window.App.reiniciarConversacion = reiniciarConversacion;

/* =========================
   FIN DEL ARCHIVO
   ========================= */

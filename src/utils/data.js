const getInitialData = () => ([
  {
    id: 1,
    title: "Node.js",
    body: "Node.js adalah runtime JavaScript yang berjalan di sisi server, memungkinkan pengembang untuk membuat aplikasi web dengan performa tinggi dan efisiensi tinggi.",
    createdAt: '2024-12-01T10:00:00.000Z',
    archived: false,
  },
  {
    id: 2,
    title: "RESTful API",
    body: "RESTful API adalah arsitektur untuk membangun layanan web yang menggunakan HTTP request untuk mengakses dan memanipulasi data.",
    createdAt: '2024-12-01T10:00:00.000Z',
    archived: false,
  },
  {
    id: 3,
    title: "JWT",
    body: "JSON Web Token (JWT) adalah standar terbuka yang digunakan untuk berbagi informasi antar klien dan server secara aman.",
    createdAt: '2024-12-01T10:00:00.000Z',
    archived: false,
  },
  {
    id: 4,
    title: "Agile Development",
    body: "Agile adalah metodologi pengembangan perangkat lunak yang berfokus pada iterasi cepat dengan umpan balik kontinu.",
    createdAt: '2024-12-01T10:00:00.000Z',
    archived: false,
  },
  {
    id: 5,
    title: "Continuous Integration",
    body: "Continuous Integration adalah praktik otomatisasi pengujian kode setiap kali kode di-commit ke repositori utama.",
    createdAt: '2024-12-01T10:00:00.000Z',
    archived: true,
  },
  {
    id: 6,
    title: "Docker",
    body: "Docker adalah platform untuk mengembangkan, mengirimkan, dan menjalankan aplikasi dalam container.",
    createdAt: '2024-12-01T10:00:00.000Z',
    archived: true,
  },
]);

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};

export { getInitialData, showFormattedDate };

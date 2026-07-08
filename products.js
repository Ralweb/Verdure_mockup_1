// Catalogo Verdure 2026 — dati condivisi
window.VERDURE_PRODUCTS = [
  { slug: 'megadot',    name: 'Megadot',     price: 1290, cat: 'Sospensioni',    page: 11,  avail: true,  desc: 'Anello LED sospeso di grande diametro, luce diretta e indiretta per spazi rappresentativi.' },
  { slug: 'superdot',   name: 'Superdot',    price: 890,  cat: 'Sospensioni',    page: 19,  avail: true,  desc: 'Profilo anulare sospeso a sezione sottile, emissione diffusa e uniforme.' },
  { slug: 'wiredot',    name: 'Wiredot',     price: 640,  cat: 'Sospensioni',    page: 23,  avail: true,  desc: 'Anello sospeso su tiranti in acciaio, corpo in alluminio verniciato nero.' },
  { slug: 'underlined', name: 'Underlined',  price: 420,  cat: 'Sistemi lineari', page: 27, avail: true,  desc: 'Sistema lineare a ottiche puntuali dark-light, per installazione a binario o plafone.' },
  { slug: 'dot',        name: 'Dot',         price: 95,   cat: 'Incasso',        page: 33,  avail: true,  desc: 'Downlight a incasso con riflettore antiabbagliamento, foro compatto.' },
  { slug: 'tod',        name: 'Tod',         price: 120,  cat: 'Plafone',        page: 37,  avail: true,  desc: 'Cilindro a plafone con anello LED perimetrale, corpo bicolore.' },
  { slug: 'slash',      name: 'Slash',       price: 140,  cat: 'Incasso',        page: 41,  avail: false, desc: 'Incasso quadrato wall-washer con schermo asimmetrico anti-glare.' },
  { slug: 'microdot',   name: 'Microdot',    price: 78,   cat: 'Incasso',        page: 45,  avail: true,  desc: 'Micro downlight a incasso, disponibile in finitura bianca o nera.' },
  { slug: 'asterix',    name: 'Asterix',     price: 160,  cat: 'Incasso',        page: 49,  avail: true,  desc: 'Proiettore a incasso orientabile con staffe a molla, ottica sostituibile.' },
  { slug: 'dash',       name: 'Dash',        price: 190,  cat: 'Incasso',        page: 55,  avail: true,  desc: 'Profilo lineare a incasso con LED a vista, montaggio su molle.' },
  { slug: 'wiredot-s',  name: 'Wiredot Surface', price: 580, cat: 'Plafone',     page: 59,  avail: true,  desc: 'Versione a plafone dell\u2019anello Wiredot, emissione diretta.' },
  { slug: 'moreorless', name: 'Moreorless',  price: 135,  cat: 'Incasso',        page: 65,  avail: true,  desc: 'Downlight regolabile in profondit\u00e0: pi\u00f9 o meno incassato, a scelta.' },
  { slug: 'grade',      name: 'Grade',       price: 110,  cat: 'Incasso',        page: 69,  avail: false, desc: 'Incasso trimless con gola di raccordo, ottica dark-light.' },
  { slug: 'grade-plus', name: 'Grade Plus',  price: 150,  cat: 'Plafone',        page: 79,  avail: true,  desc: 'Cilindro a plafone della famiglia Grade, corpo bianco e ghiera nera.' },
  { slug: 'sun-sunset', name: 'Sun/Sunset',  price: 210,  cat: 'Orientabili',    page: 85,  avail: true,  desc: 'Proiettore orientabile a parete o plafone, rotazione 355\u00b0.' },
  { slug: 'hatch',      name: 'Hatch',       price: 240,  cat: 'Plafone',        page: 89,  avail: true,  desc: 'Plafoniera circolare con anello luminoso perimetrale nascosto.' },
  { slug: 'comma',      name: 'Comma',       price: 175,  cat: 'Plafone',        page: 93,  avail: true,  desc: 'Cilindro a plafone dal profilo morbido, emissione diretta accent.' },
  { slug: 'focus',      name: 'Focus',       price: 130,  cat: 'Proiettori',     page: 97,  avail: true,  desc: 'Proiettore a semi-incasso orientabile, corpo cilindrico bianco.' },
  { slug: 'focus-plus', name: 'Focus Plus',  price: 165,  cat: 'Proiettori',     page: 101, avail: false, desc: 'Proiettore snodato a doppia articolazione, per binario o base fissa.' },
  { slug: 'accessories', name: 'Accessori',  price: 15,   cat: 'Accessori',      page: 109, avail: true,  desc: 'Ottiche, cornici, driver e ricambi per tutte le famiglie del catalogo.' }
];
window.VERDURE_CATS = ['In Offerta','Sospensioni','Incasso','Plafone','Proiettori','Orientabili','Sistemi lineari','Accessori'];
window.VERDURE_FMT = function (n) {
  return '\u20ac' + n.toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

export default function state() {
    return {
        search: "",
        products: [
            { id: 1,
              name: 'მუსიკა',
              url: 'https://www.youtube.com/embed/RD-Cjo-6ZRI',
              description: 'qartuli musika',
              cover: 'https://images.macrumors.com/t/hi1_a2IdFGRGMsJ0x31SdD_IcRk=/1600x/article-new/2018/05/apple-music-note.jpg'  },
            { id: 2,
              name: 'მსოფლიო თასი',
              url: 'https://www.youtube.com/embed/R6aCvi1ctec',
              description: 'ფეხბურთი',
              cover: "https://cdn2.ipn.ge/media/__thumbs__/uploads/2022/12-18/532ba5e3_7c65_4789_849e_5cfdab60f231.webp" },
            { id: 3, 
              name: 'თამაში',
              url: 'https://www.youtube.com/embed/ldm4tcMoiog',
              description: 'Tamashi',
              cover: "https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png" },
             
        ],
        cart: []
    }
}
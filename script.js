const questions = [
  {
    question: "What is the street name of International Slavery Museum?",
    answers: [
      { text: "Church St", correct: false },
      { text: "Liverpool Albert Dock", correct: true },
    ],
  },

  {
    question: "What is the street name of St Nicolas Church?",
    answers: [
      { text: "Pier Head", correct: false },
      { text: "Old Churchyard,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of Mersey Maritime Museum?",
    answers: [
      { text: "Taylor st , birkenhead", correct: false },
      { text: "Royal Albert Dock", correct: true },
    ],
  },
  {
    question: "What is the street name of St Lukes Church?",
    answers: [
      { text: "Sefton Park", correct: false },
      { text: "Berry St", correct: true },
    ],
  },
  {
    question: "What is the street name of The Mersey Ferry Terminal?",
    answers: [
      { text: "Liverpool One, Strand Street", correct: true },
      { text: "Pier Head,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Cilla Black Statue?",
    answers: [
      { text: "Wiliam Brown", correct: false },
      { text: "Mathew st", correct: true },
    ],
  },
  {
    question: "What is the street name of The John Lennon Statue?",
    answers: [
      { text: "Penny Lane", correct: true },
      { text: "St George  street", correct: false },
    ],
  },
  {
    question: "What is the street name of The Walker Art Gallery?",
    answers: [
      { text: "William Brown St", correct: true },
      { text: "Mount st", correct: false },
    ],
  },
  {
    question: "What is the street name of The Wirral Transport Museum?",
    answers: [
      { text: "Taylor Street, Birkenhead", correct: true },
      { text: "Cunard Building ", correct: false },
    ],
  },
  {
    question: "What is the street name of The Case History?",
    answers: [
      { text: "Arnold st", correct: false },
      { text: "Hope Street, Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The St Peters Church Woolton?",
    answers: [
      { text: "Mount st,Livepool", correct: false },
      { text: "Church Road, Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Al Rahma Mosque?",
    answers: [
      { text: "Hatherley St, Liverpool", correct: true },
      { text: "Rumford St", correct: false },
    ],
  },
  {
    question: "What is the street name of The Beatles Statue?",
    answers: [
      { text: "Keel Wharf,Liverpool", correct: false },
      { text: "Pier Head,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Croxteth Hall And Country Park?",
    answers: [
      { text: "Church Road,Liverpool", correct: false },
      { text: "Murhead Avenue E,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The The Palm House?",
    answers: [
      { text: "School Ln,Liverpool", correct: false },
      { text: "Sefton PArk,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Magical Beatles Museum?",
    answers: [
      { text: "Keel Wharf", correct: false },
      { text: "Mathew st", correct: true },
    ],
  },
  {
    question: "What is the street name of The British Music Experience?",
    answers: [
      { text: "Cunard Building", correct: true },
      { text: "Admiral Grove", correct: false },
    ],
  },
  {
    question: "What is the street name of The Bluecoat?",
    answers: [
      { text: "Pier Head,Liverpool", correct: false },
      { text: "School Ln,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The World Museum?",
    answers: [
      { text: "Wiliam Brown St,Liverpool", correct: true },
      { text: "Stanley St,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The LIPA(performing arts)?",
    answers: [
      { text: "Liverpool one", correct: false },
      { text: "Mount ST,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The St George Hall?",
    answers: [
      { text: "Water st,Liverpool", correct: false },
      { text: "St George PL,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Casbah Coffe Club?",
    answers: [
      { text: "Hope st,Liverpool", correct: false },
      { text: "Hayman's Green,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The George Harrison Birthplace?",
    answers: [
      { text: "Arnold Grove, Liverpool", correct: true },
      { text: "High St,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Ringo Star's Brithplace?",
    answers: [
      { text: "Admiral Grove,Liverpool", correct: true },
      { text: "Mount's St,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Western Approaches Museum?",
    answers: [
      { text: "Kirk St,Liverpool", correct: false },
      { text: "Rumford St,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Anglican Cathedral?",
    answers: [
      { text: "St James Road", correct: true },
      { text: "Men St,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Royal Liver Building?",
    answers: [
      { text: "Admiral st,Liverpool", correct: false },
      { text: "Water st,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Liverpool Town Hall?",
    answers: [
      { text: "High Street", correct: true },
      { text: "Mathew st", correct: false },
    ],
  },
  {
    question: "What is the street name of The Chinese Arch?",
    answers: [
      { text: "Nelson st,Liverpool", correct: true },
      { text: "China Town,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Picton Reading Room's?",
    answers: [
      { text: "Wiliam Brown St", correct: true },
      { text: "Church st,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Museum of Liverpool Life?",
    answers: [
      { text: "Pier Head/Mann Island", correct: true },
      { text: "Man island,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Wiliamson Tunnels?",
    answers: [
      { text: "Keel yard,Liverpool", correct: false },
      { text: "The old Stable Yard", correct: true },
    ],
  },
  {
    question: "What is the street name of The Home of Paul McCartney?",
    answers: [
      { text: "Forthlin Road", correct: true },
      { text: "Mathew st", correct: false },
    ],
  },
  {
    question: "What is the street name of The Strawberry Fields?",
    answers: [
      { text: "Menlove avenue", correct: false },
      { text: "BeaconField Road", correct: true },
    ],
  },
  {
    question: "What is the street name of The Beatles Story?",
    answers: [
      { text: "Britannia Vaults,Royal Albert Dock", correct: true },
      { text: "Liverpool st", correct: false },
    ],
  },
  {
    question: "What is the street name of The Metropolitan Cathedral?",
    answers: [
      { text: "Precot st,Liverpool", correct: false },
      { text: "Mount Pleasant", correct: true },
    ],
  },
  {
    question: "What is the street name of The Cunard Building?",
    answers: [
      { text: "Pier Head,Liverpool", correct: false },
      { text: "Water street", correct: true },
    ],
  },
  {
    question: "What is the street name of The Eleanor Rigby Statue?",
    answers: [
      { text: "Stanley St,Mathew St", correct: true },
      { text: "The Walk Way,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Anthony Gormley Statue?",
    answers: [
      { text: "Keel Wharf", correct: false },
      { text: "Mariners Road, Blundellsands", correct: true },
    ],
  },
  {
    question: "What is the street name of The Isle of Man Ferry Terminal?",
    answers: [
      { text: "Liverpool One ", correct: false },
      { text: "Jesse Hartley Way", correct: true },
    ],
  },
  {
    question: "What is the street name of The Knowsley Safari Park?",
    answers: [
      { text: "Precot", correct: true },
      { text: "Merton Road,The Walk Way,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Lady Lever Art Galery?",
    answers: [
      { text: "Lower Road ,Bebington", correct: true },
      { text: "Walk st,birkenhead", correct: false },
    ],
  },
  {
    question: "What is the street name of The Cavern Club?",
    answers: [
      { text: "George St,The Walk Way,Liverpool", correct: false },
      { text: "Mathew st", correct: true },
    ],
  },
  {
    question: "What is the street name of The Tate Art Gallery?",
    answers: [
      { text: "Dock Road,Liverpool", correct: false },
      { text: "Royal Albert Dock", correct: true },
    ],
  },
  {
    question: "What is the street name of The Speke Hall?",
    answers: [
      { text: "The Walk Speke", correct: true },
      { text: "Marinar st", correct: false },
    ],
  },
  {
    question: "What is the street name of The Mendips (John Lennon's House)?",
    answers: [
      { text: "John st,Liverpool", correct: false },
      { text: "Menlove Avenue", correct: true },
    ],
  },
  {
    question: "What is the street name of The Gateway Centre?",
    answers: [
      { text: "Jmaes st,Liverpool", correct: false },
      { text: "London Road,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Liverpool Wheel?",
    answers: [
      { text: "Jesica st,Liverpool", correct: false },
      { text: "Keel Wharf", correct: true },
    ],
  },
  {
    question: "What is the street name of The Hard Days Night Hotel?",
    answers: [
      { text: "CEntral Building, North John St, Liverpool", correct: true },
      { text: "Nelson st,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Cowne Plaza City Hotel?",
    answers: [
      { text: "St Nicholas Place,Liverpool", correct: true },
      { text: "Church St,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Hilton Hotel?",
    answers: [
      { text: "Thomas Steers Way,Liverpool", correct: true },
      { text: "Lane Road, Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Malmaison Hotel?",
    answers: [
      { text: "Jesica st,Liverpool", correct: false },
      { text: "Wiliam Jessop Way,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Radisson Blu Hotel?",
    answers: [
      { text: "Dawson Road,Liverpool", correct: false },
      { text: "Old Hall St,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Premier Inn Aintree Racecourse?",
    answers: [
      { text: "Ormskirk Road,Liverpool", correct: true },
      { text: "James st,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Hallmark Hotel Sefton Park?",
    answers: [
      { text: "Aigburth Drive,Liverpool", correct: true },
      { text: "Aintree Hall,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Campanile Hotel?",
    answers: [
      { text: "Chaloner St, Queens Dock,Liverpool", correct: true },
      { text: "Princess st,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Holiday Inn City centre?",
    answers: [
      { text: "Jesica st,Liverpool", correct: false },
      { text: "Lime st,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Jury's Inn?",
    answers: [
      { text: "Keel Wharf ,Liverpool", correct: true },
      { text: "Faruih St,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Hotel Indigo?",
    answers: [
      { text: "Saragd ,Liverpool", correct: false },
      { text: "Chapel St,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Days Inn (Hotel Heeton)?",
    answers: [
      { text: "James st,Liverpool", correct: true },
      { text: "George st,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Novo Hotel?",
    answers: [
      { text: "Johanna st,Liverpool", correct: false },
      { text: "Hanover St,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Crowne Plaza (JLA)?",
    answers: [
      { text: "Speke Aerodrome ,Liverpool", correct: true },
      { text: "Stanley st,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Liner Hotel?",
    answers: [
      { text: "North St,Liverpool", correct: false },
      { text: "Lord Nelson St,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Premier Inn City Centre?",
    answers: [
      { text: "Hanover St,,Liverpool", correct: true },
      { text: "Vernon St,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of TheHallmark Hotel City (feathers )?",
    answers: [
      { text: "Mount Pleasant,Liverpool", correct: true },
      { text: "Keel Wharf,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Park Hotel?",
    answers: [
      { text: "Primrose Hill,Liverpool", correct: false },
      { text: "Dunnings Bridge Road,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of Village Hotel Whiston?",
    answers: [
      { text: "Bridge st,Liverpool", correct: false },
      { text: "Fallows Way,Whinston,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Village Hotel Wirral?",
    answers: [
      { text: "Pool Lane, Bromborough Pool,Wirral", correct: true },
      { text: "Speke Ln,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Titanic Hotel?",
    answers: [
      { text: "Dive Old Hall,Liverpool", correct: false },
      { text: "Stanley Dock,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Aloft Hotel ?",
    answers: [
      { text: "North John St,Liverpool", correct: true },
      { text: "Duke st,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Mountford Hotel?",
    answers: [
      { text: "Jesica st,Liverpool", correct: false },
      { text: "Croxteth Road,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Hampton By Hilton City?",
    answers: [
      { text: "Queen dock st,Liverpool", correct: false },
      { text: "Kings Dock Mill, Hurst St ,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Blenhiem Lakeside Hotel?",
    answers: [
      { text: "Aigburth Drive,Liverpool", correct: true },
      { text: "King Hall,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Britannia Adelphi Hotel?",
    answers: [
      { text: "Ranelagh St,Liverpool", correct: true },
      { text: "Keel Arch,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Double Tree By Hilton?",
    answers: [
      { text: "Sir Thomas St,Liverpool", correct: true },
      { text: "Victoria St,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Hampton By Hilton (JLA)?",
    answers: [
      { text: "Speke Hall Avenue,Liverpool", correct: true },
      { text: "Britannia Hill,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of TheHatters Hostel?",
    answers: [
      { text: "Jesica st,Liverpool", correct: false },
      { text: "Mount Pleasant,Liverpool ", correct: true },
    ],
  },
  {
    question: "What is the street name of The Travelodge Stoneycroft?",
    answers: [
      { text: "Queens Dt, Stoneycroft,Liverpool", correct: true },
      { text: "Lime St,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Hope St Hotel?",
    answers: [
      { text: "Ledge Ln,Liverpool", correct: false },
      { text: "Hope St ,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Travelodge(JLA)?",
    answers: [
      { text: "Speke HAll Avenue,Liverpool", correct: true },
      { text: "Victoria st,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Pullman Hotel?",
    answers: [
      { text: "Kings Dock, Monarchs Quay,Liverpool", correct: false },
      { text: "Hope St,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Beech Mount Hotel?",
    answers: [
      { text: "Beech Mount,Liverpool", correct: true },
      { text: "Keel Wharf", correct: false },
    ],
  },
  {
    question: "What is the street name of The Mercure Hotel?",
    answers: [
      { text: "Whitley Road,Liverpool", correct: true },
      { text: "Thomas st,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of TheRichmond Hotel?",
    answers: [
      { text: " Hall Avenue,Liverpool", correct: false },
      { text: "Halton Garden,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Shankley Hotel?",
    answers: [
      { text: "Jesica st,Liverpool", correct: false },
      { text: "Victoria St,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Staybridge Suites?",
    answers: [
      { text: "Queen st,Liverpool", correct: false },
      { text: " Keel Wharf,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Liverpool One Premier Inn?",
    answers: [
      { text: "Hanover St,Liverpool", correct: true },
      { text: " Victoria st,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Suites Hotel?",
    answers: [
      { text: "Ribblers Lane,Prescot,Liverpool", correct: true },
      { text: "Keel Wharf", correct: false },
    ],
  },
  {
    question: "What is the street name of The Marriot Hotel City Centre?",
    answers: [
      { text: "Marriot st,Liverpool", correct: false },
      { text: "One Queen Square,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Holiday Inn Express?",
    answers: [
      { text: "Pier Head,Liverpool", correct: false },
      { text: "Britannia Pavillion, Albert Dock,,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Travelodge Central?",
    answers: [
      { text: "Old HAymarket,Liverpool", correct: true },
      { text: "Ranelaght,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Ibis Hotel?",
    answers: [
      { text: "Wapping ,Liverpool", correct: true },
      { text: "Vernon St,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Picture House Apartments?",
    answers: [
      { text: " Fenn Lane,Liverpool", correct: false },
      { text: "Scotland Road,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Devonshire Hotel?",
    answers: [
      { text: "Edge Lane,Liverpool", correct: true },
      { text: "Kyne Wharf,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Penny Lane Hotel?",
    answers: [
      { text: "Smithdowmn Place,Liverpool", correct: true },
      { text: "Old Wapping Ln,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Resident Hotel(Nadler)?",
    answers: [
      { text: " Hunter St,Liverpool", correct: false },
      { text: " Seel St,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Reach?",
    answers: [
      { text: "Leeds St,Liverpool", correct: true },
      { text: "North St,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Internationla INN-Cocoon Pod?",
    answers: [
      { text: "Castle St,Liverpool", correct: false },
      { text: "South Hunter St", correct: true },
    ],
  },
  {
    question: "What is the street name of The Unity Theatre?",
    answers: [
      { text: "Hope Place,Liverpool", correct: true },
      { text: "Roe st", correct: false },
    ],
  },
  {
    question: "What is the street name of The Ghetto Golf?",
    answers: [
      { text: "Jesica st,Liverpool", correct: false },
      { text: "Stanhope St,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Cavern Club?",
    answers: [
      { text: "Leceer st,Liverpool", correct: false },
      { text: "Mathew St,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of TheGino D'Acampo Restaurant?",
    answers: [
      { text: "Jesica st,Liverpool", correct: false },
      { text: "Castle St,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Alma de Cuba?",
    answers: [
      { text: "Round lane st,Liverpool", correct: false },
      { text: "St Peter's Church , Seel St,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Panoramic Restaurant?",
    answers: [
      { text: "Floor, West Tower, Brook St,Liverpool", correct: true },
      { text: "  Great Floor,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Royal Court Theatre?",
    answers: [
      { text: "Roe St,Liverpool", correct: true },
      { text: "Hell Yrad Wharf ,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Play House Theatre?",
    answers: [
      { text: "Queens Square,Liverpool", correct: false },
      { text: "Williamson Square,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Gusto Restaurant?",
    answers: [
      { text: "Albert Dock,Liverpool", correct: true },
      { text: "Castle st,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Smuggler's Clove Restaurant?",
    answers: [
      { text: "Old Hall st,Liverpool", correct: false },
      { text: "Britannia Pavillion Albert Dock,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Hebbie Jeebies?",
    answers: [
      { text: "Dale st,Liverpool", correct: false },
      { text: "Seal St ,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The San Carlo Restaurant?",
    answers: [
      { text: "Hardman St,Liverpool", correct: false },
      { text: "Castle St,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Viva Briazil REstaurant?",
    answers: [
      { text: " Leece st,Liverpool", correct: false },
      { text: " Castle St,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Sapporo Teppanyaki Restaurant?",
    answers: [
      { text: " Duke St,Liverpool", correct: true },
      { text: " William St,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Yates Liverpool?",
    answers: [
      { text: "Hanover st,Liverpool", correct: false },
      { text: "Queens Square,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Hannah's Bar?",
    answers: [
      { text: " Leece St,Liverpool", correct: true },
      { text: " Castle St,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Baltic Fleet Ph?",
    answers: [
      { text: "Duke st,Liverpool", correct: false },
      { text: " Wapping,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Ship And Mitre?",
    answers: [
      { text: " Dale st,Liverpool", correct: true },
      { text: "Mint hale,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Fly in the Loaf?",
    answers: [
      { text: "  Resica st,Liverpool", correct: false },
      { text: "Hardman St,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The O-neils PH?",
    answers: [
      { text: "Hanover st,Liverpool", correct: true },
      { text: "Keel Wharf,,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Everton Park Sports Centre?",
    answers: [
      { text: "Great Homer st,Liverpool", correct: true },
      { text: "King square st,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Peaky Blinders?",
    answers: [
      { text: "Jesica st,Liverpool", correct: false },
      { text: "Cains Brewery Village, Stanhope St,,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Slaughter House PH?",
    answers: [
      { text: "Water Ford,Liverpool", correct: false },
      { text: " Fenwick St,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Arkles?",
    answers: [
      { text: " Anfield Road,Liverpool", correct: true },
      { text: "Ledge Lane,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Restaurant Bar and Grill?",
    answers: [
      { text: "Hope St,Liverpool", correct: false },
      { text: "Brunswick St,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of TheGbar Nightclub?",
    answers: [
      { text: "Eberle St,Liverpool", correct: true },
      { text: "Hardman St,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Epstein Theatre?",
    answers: [
      { text: "Jesica st,Liverpool", correct: false },
      { text: " Hanover St,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The FACT Cinema?",
    answers: [
      { text: " Wood St,Liverpool", correct: true },
      { text: "Edge Lane,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Grosvenor Casino(Leo's)?",
    answers: [
      { text: "Duke St,Liverpool", correct: false },
      { text: " Chaloner St", correct: true },
    ],
  },
  {
    question: "What is the street name of The Showcase Cinema?",
    answers: [
      { text: "Anfield Road,Liverpool", correct: false },
      { text: "East Lancashire Road,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Philharmonic Hall?",
    answers: [
      { text: "Hope St,Liverpool", correct: true },
      { text: "Lime St,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Green Room?",
    answers: [
      { text: "King Hall,Liverpool", correct: false },
      { text: "Duke St,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The M&S Bank Arena?",
    answers: [
      { text: "Goodes ST,Liverpool", correct: false },
      { text: "King Dock,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The WAvertree Sport Park?",
    answers: [
      { text: "JWellington Road,Liverpool", correct: true },
      { text: "Anfield Road,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Hollywood Bowl Liverpool?",
    answers: [
      { text: "Jesica st,Liverpool", correct: false },
      { text: "Edge Lane,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Florist PH?",
    answers: [
      { text: " Hardman St,Liverpool", correct: true },
      { text: "Keel Handy,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Bier Keller?",
    answers: [
      { text: "Robberts st,Liverpool", correct: false },
      { text: "Lime St,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Empire Theatre?",
    answers: [
      { text: "Lime St,Liverpool", correct: true },
      { text: "Keel Wharf", correct: false },
    ],
  },
  {
    question:
      "What is the street name of The London Carriage Works Restaurant?",
    answers: [
      { text: "Luke St,Liverpool", correct: false },
      { text: " Hope St,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Liverpool FC KOP Entrance?",
    answers: [
      { text: "Anfield Road,Liverpool", correct: true },
      { text: "Hardman St,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Everton Football Club?",
    answers: [
      { text: "Goodison Road,Liverpool", correct: true },
      { text: "Queens Road ", correct: false },
    ],
  },
  {
    question: "What is the street name of The ISLA Gladstone Conservatory?",
    answers: [
      { text: "Anfield Road,Liverpool", correct: true },
      { text: "William St,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Liverpool Cricket Club?",
    answers: [
      { text: "Water Road,Liverpool", correct: false },
      { text: "Aigburth Road ,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The World Museum?",
    answers: [
      { text: "William Brown St,Liverpool", correct: true },
      { text: "Green St,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Stag & Rainbow PH?",
    answers: [
      { text: "Jesica st,Liverpool", correct: false },
      { text: "Queen's Drive,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of TheAintree Race Course?",
    answers: [
      { text: "Yellow Lane,Liverpool", correct: false },
      { text: "Ormskirk Road ,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Greenbank Sports Academy?",
    answers: [
      { text: "Greenbank Road,Liverpool", correct: true },
      { text: "Bubblue St,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Everyman Theatre?",
    answers: [
      { text: "Henry Drive,Liverpool", correct: false },
      { text: " Hope St,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Pump House Ph?",
    answers: [
      { text: "Albert Dock,Liverpool", correct: true },
      { text: "Theatre Hall St,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Liverpool Dental Hospital?",
    answers: [
      { text: "Pembroke Place St,Liverpool", correct: false },
      { text: "Millan Dock,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The  Liverpool Dental Hospital?",
    answers: [
      { text: "William Brown St,Liverpool", correct: false },
      { text: "Pembroke Place,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The  Liverpool Registry Office?",
    answers: [
      { text: "Sandfield St,Liverpool", correct: false },
      { text: "St George Hall,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Old Swan Walk In Centre?",
    answers: [
      { text: "Crystal Close ,Liverpool", correct: true },
      { text: "David Lane St,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Hope University City Campus?",
    answers: [
      { text: "William Brown St,Liverpool", correct: false },
      { text: "Shwan St,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Hope University?",
    answers: [
      { text: "Hope Park,Liverpool", correct: true },
      { text: "Pier Head Dock,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The John Moores Mian Building?",
    answers: [
      { text: "Everton Road,Liverpool", correct: false },
      { text: "Mount Pleasant,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The IM Marsh Campus?",
    answers: [
      { text: "Earle Road,Liverpool", correct: false },
      { text: "Barkhill Road,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Royal School For the Blind?",
    answers: [
      { text: "William Brown St,Liverpool", correct: false },
      { text: "Church Road North,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Hope School?",
    answers: [
      { text: " Hartsbourne Ave , Belle Vale", correct: true },
      { text: "Millan Dock,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Sanfield Park School?",
    answers: [
      { text: "Sandfield Walk,Liverpool", correct: true },
      { text: "Rose Lane,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Redbridge School ?",
    answers: [
      { text: "Prenton Way,Liverpool", correct: false },
      { text: "Long Lane,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The  Liverpool College ?",
    answers: [
      { text: "William Brown St,Liverpool", correct: false },
      { text: "Queen's Drive ,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The King David High School?",
    answers: [
      { text: "Hope Park St,Liverpool", correct: false },
      { text: "Childwall Road ,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Arch Bishop Blanch School?",
    answers: [
      { text: " Earle Road,Liverpool", correct: true },
      { text: "Mountain Lane St,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The  Liverpool City Walk In Centre?",
    answers: [
      { text: "William  St,Liverpool", correct: false },
      { text: " David Lewis St,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Everton Walk In Centre?",
    answers: [
      { text: " David Lewis St,Liverpool", correct: true },
      { text: "Illiad St,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Queens Square Bus Station?",
    answers: [
      { text: "Sandfield Way,Liverpool", correct: false },
      { text: "Queen Square,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Edge Hill Train Station?",
    answers: [
      { text: "Woolton Road St,Liverpool", correct: true },
      { text: "Tunnel Road ,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Kirkdale Train Station?",
    answers: [
      { text: "Flower Road,Liverpool", correct: false },
      { text: "Rose Lane,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Tranmere Tovers FC Ground?",
    answers: [
      { text: "Queen Drive,Liverpool", correct: false },
      { text: "Prenton Park ,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Liverpool Colelege Arts Centre ?",
    answers: [
      { text: "William Brown St,Liverpool", correct: false },
      { text: "Myrtle St,Liverpool", correct: true },
    ],
  },
  {
    question:
      "What is the street name of The  Liverpool Uni Guild Of Students ?",
    answers: [
      { text: " Mount Pleasant,Liverpool", correct: true },
      { text: "King's Lane,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Millstead School?",
    answers: [
      { text: "Merlyn St,Liverpool", correct: false },
      { text: "Iliad St,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Alder Hey Children Hospital?",
    answers: [
      { text: "E Prescot Rd,Liverpool", correct: true },
      { text: "Derby St,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Allerton Hall?",
    answers: [
      { text: "Johanna St,Liverpool", correct: false },
      { text: "Springwood Avenue,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Broadgreen Hospital?",
    answers: [
      { text: "Thomas Drive St,Liverpool", correct: true },
      { text: "Patrick Dock,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Garston NHS Walk In?",
    answers: [
      { text: "William Brown St,Liverpool", correct: false },
      { text: "Church Road,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Liverpool Crown Court?",
    answers: [
      { text: "Derby Square,Liverpool", correct: true },
      { text: "High St,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The HMS Eaglet?",
    answers: [
      { text: "Mather Avenue,Liverpool", correct: false },
      { text: "East Brunswick Dock,Sefton St,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Otterspool Adventures?",
    answers: [
      { text: "Otterspool Drive,Liverpool", correct: true },
      { text: "Millan Dock,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Central Station?",
    answers: [
      { text: "Ranelagh St,Liverpool", correct: true },
      { text: "Speke Road,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Greenbank Student Village?",
    answers: [
      { text: "Northon St,Liverpool", correct: false },
      { text: "Greenbank Road,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The HMP Altcourse?",
    answers: [
      { text: "Higher Lane,Liverpool", correct: true },
      { text: "Milton St,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Grand Central Student Halls?",
    answers: [
      { text: "William Brown St,Liverpool", correct: false },
      { text: "Skelhome St,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Coroners Court?",
    answers: [
      { text: "Blame Road,Liverpool", correct: false },
      { text: "Derby Square,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The National Express Bus Station?",
    answers: [
      { text: "Norton St,Liverpool", correct: true },
      { text: "Will Road,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Spire Hospital?",
    answers: [
      { text: "Princess Road,Liverpool", correct: false },
      { text: "Greenbank Road,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The HMP Liverpool?",
    answers: [
      { text: "Bath Road,Liverpool", correct: false },
      { text: "Hornby Road,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Cruise Liner Terminal?",
    answers: [
      { text: "Princes Parade,Liverpool", correct: true },
      { text: "Derby Road,Liverpool", correct: false },
    ],
  },
  {
    question:
      "What is the street name of The Merseyside Police Training Academy?",
    answers: [
      { text: "Dock Road,Liverpool", correct: false },
      { text: "Mather Avenue,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Liverpool John Lennon Airport?",
    answers: [
      { text: "Speke Hall Avenue,Liverpool", correct: true },
      { text: "Lennon Avenue,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Liverpool South Parkway Station?",
    answers: [
      { text: "Woolton Road,Liverpool", correct: true },
      { text: "Millan Dock,Liverpool", correct: false },
    ],
  },

  {
    question: "What is the street name of The Liverpool City One Stop Shop?",
    answers: [
      { text: "Prescot St,Liverpool", correct: false },
      { text: "St. John's Lane,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Liverpool Women's Hospital?",
    answers: [
      { text: "Queen Road,Liverpool", correct: false },
      { text: "Crown St,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Royal Liverpool Hospital?",
    answers: [
      { text: "Prescot St,Liverpool", correct: true },
      { text: "Royal Road,Liverpool", correct: false },
    ],
  },
  {
    question: "What is the street name of The Aintree (Fazakerley) Hospital?",
    answers: [
      { text: "Higher Lane,Liverpool", correct: false },
      { text: "Lower Lane,Liverpool", correct: true },
    ],
  },
  {
    question: "What is the street name of The Central Library?",
    answers: [
      { text: "William Brown St,Liverpool", correct: true },
      { text: "Millan Dock,Liverpool", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();

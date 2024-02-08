// fix image to only do the end of url text
// change awards to be a list
// pass in size prop

function Profile({person}) {
  return (
    <div>
      <section className="profile">
        <h2>{person.name}</h2>
        <img
          className="avatar"
          src={person.image}
          alt={person.name}
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {person.profession}
          </li>
          <li>
            <b>Awards: {person.numAwards} </b>
            ({person.awardsText})
          </li>
          <li>
            <b>Discovered: </b>
            {person.discovered}
          </li>
        </ul>
      </section>
    </div>
  )
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile person={{name: 'Maria Skłodowska-Curie', 
                        image: 'https://i.imgur.com/szV5sdGs.jpg', 
                        profession: 'physicist and chemist',
                        numAwards: '4',
                        awardsText: 'Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal',
                        discovered: 'polonium (element)'
                        }} 
      />

      <Profile person={{name: 'Katsuko Saruhashi', 
                        image: 'https://i.imgur.com/YfeOqp2s.jpg', 
                        profession: 'geochemist',
                        numAwards: '2',
                        awardsText: 'Miyake Prize for geochemistry, Tanaka Prize',
                        discovered: 'a method for measuring carbon dioxide in seawater'
                        }} 
      />
      </div>
  );
}

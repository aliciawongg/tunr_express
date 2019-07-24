var React = require("react");

class Home extends React.Component {
  render() {
     console.log(this.props.artists);

     let artistList = this.props.artists.map((artist,i) => {
        return (
            <div>
                <a href={`/artist/${i+1}`}>
                <li>{artist.name}</li>
                </a>
            </div>)
     });
     // console.log("artist name: ", artistsList[0].name);

    return (
      <html>
        <body>
          <h1>Welcome!</h1>
          <h2>List of artists</h2>
          <ul>{artistList}</ul>
        </body>
      </html>
    );
  }
}

module.exports = Home;
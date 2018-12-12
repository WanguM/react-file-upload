import React from "react";
import ImageUploader from "react-images-upload";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [] };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(pictureFiles, pictureDataURLs) {
    this.setState({
      pictures: this.state.pictures.concat(pictureFiles)
    });
  }

  render() {
    return (
      <ImageUploader
        withIcon={true}
        buttonText="Choose images"
        onChange={this.onDrop}
        imgExtension={[".jpg", ".png"]}
        maxFileSize={5242880}
        withPreview={true}
        withLabel={true}
        label="Max file size is 5 mb"
      />
    );
  }
}

export default App;

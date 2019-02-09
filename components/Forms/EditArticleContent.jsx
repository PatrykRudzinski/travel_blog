import React from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '@styles/wysiwyg.css';

class EditArticleContent extends React.Component {
  state = {
    isClient: false,
    editorState: null,
  };

  componentDidMount = () => {
    this.setState({
      isClient: true,
      editorState: EditorState.createEmpty(),
    })
  };

  onEditorStateChange = (editorState) => {
    this.setState({ editorState })
  };

  render() {

    const { isClient, editorState } = this.state;

      if(isClient) {
        return (
          <Editor
            wrapperClassName="wrapper"
            editorClassName="editor"
            toolbarClassName="toolbar"
            toolbarOnFocus
            editorState={editorState}
            onEditorStateChange={this.onEditorStateChange}
          />
        )
      } else {
        return null
      }
  }
}

export default EditArticleContent;
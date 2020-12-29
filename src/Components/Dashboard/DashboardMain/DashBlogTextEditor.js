import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const DashBlogTextEditor = () => {
    const [textEditorText, setTextEditorText] = useState({});
    const handleTextEditor = () => {}
    return (
        <div className='col-md-12'>
            <CKEditor
            editor={ ClassicEditor}
            data={textEditorText}
            onChange={handleTextEditor}
            />
        </div>
    );
};

export default DashBlogTextEditor;
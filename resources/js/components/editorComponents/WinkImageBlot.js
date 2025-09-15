import Quill from 'quill';

let BlockEmbed = Quill.import('blots/block/embed');

class WinkImageBlot extends BlockEmbed {
    static create(value) {
        let node = super.create();
        let img = document.createElement('img');

        node.setAttribute('contenteditable', false);
        node.dataset.layout = value.layout;
        node.dataset.size = value.size || 'default';

        img.setAttribute('alt', value.caption);
        img.setAttribute('src', value.url);

        // Create a container for horizontal layout
        let imageContainer = document.createElement('div');
        imageContainer.className = 'image-container';
        imageContainer.appendChild(img);

        node.appendChild(imageContainer);

        if (value.caption) {
            let caption = document.createElement('div');
            caption.className = 'image-caption';
            caption.innerHTML = value.caption;
            node.appendChild(caption);
        }

        return node;
    }

    static value(node) {
        let img = node.querySelector('img');
        let captionElement = node.querySelector('.image-caption');

        return {
            layout: node.dataset.layout,
            size: node.dataset.size || 'default',
            caption: captionElement ? captionElement.innerHTML : '',
            url: img.getAttribute('src')
        };
    }
}

WinkImageBlot.tagName = 'div';
WinkImageBlot.blotName = 'captioned-image';
WinkImageBlot.className = 'embedded_image';

export default WinkImageBlot;

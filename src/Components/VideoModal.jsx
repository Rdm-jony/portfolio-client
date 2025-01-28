import 'video-react/dist/video-react.css'
import { Player } from 'video-react';

const VideoModal = ({ url }) => {
    console.log(url)
    return (
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
                <iframe className='w-full h-60' src={url}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <button onClick={() => document.getElementById('my_modal_3').close()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

            </div>
        </dialog>
    );
};

export default VideoModal;
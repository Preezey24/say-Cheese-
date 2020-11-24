import React from 'react'; 

const HomePage = (props) => {
    return (
        <>
            {props.photos.map(photo => {
                return (
                    <div key={photo.id}>
                        {photo.imageLink}
                    </div>
                )
            })}
        </>
    )
}

export default HomePage; 
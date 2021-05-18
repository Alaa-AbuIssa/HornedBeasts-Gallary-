import React from 'react';
import HornedBeast from './HornedBeasts';
import Horned from './Horned.json';
class Main extends React.Component {
    render() {
        return (
            <>
                {
                    Horned.map(item => {
                        return (
                            <HornedBeast
                                title={item.title}
                                img={item.image_url}
                                description={item.description}

                            />
                        )
                    })
                }
            </>
        )
    }
}
export default Main;
/

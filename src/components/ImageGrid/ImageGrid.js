import React, { Component } from 'react';

import { connect } from 'react-redux';

import { loadImages } from '../../actions';
import Button from '../Button';

import './styles.css';

class ImageGrid extends Component {
    componentDidMount() {
        const { loadImages } = this.props;

        loadImages();
    }

    render() {
        const { loadImages, images, error, isLoading } = this.props;
        return (
            <div className="content">
                <section className="grid">
                    {images.map((image) => (
                        <div
                            key={image.id}
                            className={`item item-${Math.ceil(
                                image.height / image.width,
                            )}`}
                        >
                            <img
                                src={image.urls.small}
                                alt={image.user.username}
                            />
                        </div>
                    ))}
                    <Button
                        onClick={() => !isLoading && loadImages()}
                        loading={isLoading}
                    >
                        Load More
                    </Button>
                </section>
                {error && <div className="error">{JSON.stringify(error)}</div>}
            </div>
        );
    }
}

const mapStatetoProps = ({ isLoading, images, error }) => ({
    isLoading,
    images,
    error,
});

const mapDispatchToProps = (dispatch) => ({
    loadImages: () => dispatch(loadImages()),
});

export default connect(mapStatetoProps, mapDispatchToProps)(ImageGrid);

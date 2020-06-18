import React from 'react';
import ShopData from './shop-data';
import PrevColl from '../../component/preview-coll/prev-coll-comp';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: ShopData,
    };
  }

  render() {
    const { collection } = this.state;
    return (
      <div className="shop-page">
        {collection.map(( {id, ...otherCollProps} ) => (
          <PrevColl key={id} { ...otherCollProps} />
        ))}
      </div>
    );
  }
}
export default ShopPage;

import React from "react";
import SHOP_DATA from "../../data/shop.data";
import Preview from "../../components/preview/preview.component";
class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...props }) => {
          return <Preview key={id} {...props} />;
        })}
      </div>
    );
  }
}

export default ShopPage;

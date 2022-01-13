import React from 'react';

interface Props {
    id: number;
    title: string;
    img: string;
    color: string;
    size: string;
    price: string;
    quantity: number;
    handlePlusQuantity: (id: number) => void;
    handleMinesQuantity: (id: number) => void;
}

const CartList = (props: Props) => {
    const {
        title,
        img,
        color,
        size,
        price,
        handlePlusQuantity,
        handleMinesQuantity,
        quantity,
        id
    } = props;

    const totalPrice = parseInt(price) * quantity * 1000;
    const formatTotalPrice = totalPrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, '.');

    return (
        <tr className="flex justify-between items-center pb-4 mb-4 border-b">
            <td className="flex w-2/5 items-center">
                <img className="w-20 h-20" src={img} alt="" />
                <div className="ml-4">
                    <p className="text-sm">{title}</p>
                    <p className="text-sm text-textProductCartGray">Color: {color}</p>
                    <p className="text-xs text-textProductCartGray">Size: {size}</p>
                </div>
            </td>
            <td className="w-1/5 text-textPriceCartPurple text-sm">Rp.{price}</td>
            <td className="w-1/5">
                <div className="flex items-center">
                    <button
                        type="button"
                        onClick={() => handleMinesQuantity(id)}
                        className="text-xs px-1 py-0.5 border bg-buttonQuantityBg text-textQuantity">
                        -
                    </button>
                    <p className="text-xs px-2 py-0.5 border bg-buttonMiddleQuantityBg">
                        {quantity}
                    </p>
                    <button
                        type="button"
                        onClick={() => handlePlusQuantity(id)}
                        className="text-xs px-1 py-0.5 border bg-buttonQuantityBg text-textQuantity">
                        +
                    </button>
                </div>
            </td>
            <td className="w-1/5 text-textPriceCartPurple text-sm">Rp.{formatTotalPrice}</td>
        </tr>
    );
};

CartList.defaultProps = {};

export default React.memo(CartList);

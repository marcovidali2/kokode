import { menu } from "../menu";

const Menu = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-4">
            {menu.map((category) => (
                <div
                    className="w-full justify-center space-y-4"
                    key={category.id}
                >
                    <h1 className="font-dm-serif-display bg-primary py-4 text-center text-primary-content text-4xl">
                        {category.category}
                    </h1>

                    <ul>
                        <hr />
                        {category.products.map((product) => (
                            <li key={product.id}>
                                <div className="flex justify-between items-center">
                                    <div className="py-2">
                                        <p>{product.name}</p>
                                        <p className="opacity-80 text-sm">
                                            {product.ingredients.join(", ")}
                                        </p>
                                    </div>
                                    <div className="w-16 flex justify-end">
                                        € {product.price.toFixed(2)}
                                    </div>
                                </div>
                                <hr />
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Menu;

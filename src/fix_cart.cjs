const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'components');

const cartLogic = `
    const { cart, setcart } = React.useContext(CartContext);

    const handleAddToCart = (item) => {
        const isExisting = cart.find(c => c._id === item._id);
        if (isExisting) {
            setcart(cart.map(c => c._id === item._id ? { ...c, quantity: (c.quantity || 1) + 1 } : c));
        } else {
            setcart([...cart, { ...item, quantity: 1 }]);
        }
    };
`;

const files = ['Adeniums.jsx', 'AirPurifyingPlants.jsx', 'AquaticPlants.jsx', 'Cactus.jsx', 'OutdoorPlants.jsx'];

files.forEach(file => {
    const filePath = path.join(dir, file);
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf8');

    // Add import if not present
    if (!content.includes('CartContext')) {
        content = content.replace("import { Button, Card } from 'react-bootstrap'", "import { Button, Card } from 'react-bootstrap';\nimport { CartContext } from '../Features/ContextProvider';");
    }

    // Add handleAddToCart logic and context inside function
    const functionMatch = content.match(/function\s+(\w+)\s*\(\)\s*\{/);
    if (functionMatch && !content.includes('handleAddToCart')) {
        const funcStart = content.indexOf('{', functionMatch.index) + 1;
        content = content.slice(0, funcStart) + cartLogic + content.slice(funcStart);
    }

    let idCounter = 1;
    // We need to dynamically wrap the button with onClick passing the hardcoded card info
    const regex = /<Card\.Img[^>]*src=["']([^"']+)["'][^>]*>[\s\S]*?<Card\.Title>\s*([^<]+)\s*<\/Card\.Title>[\s\S]*?<p[^>]*>Rs:(\d+)<\/p>[\s\S]*?<Button([^>]*)>Add to Cart<\/Button>/g;
    
    content = content.replace(regex, (match, image, title, price, buttonAttrs) => {
        const itemId = file.replace('.jsx', '') + idCounter++;
        return match.replace(/<Button([^>]*)>Add to Cart<\/Button>/, '<Button$1 onClick={() => handleAddToCart({ _id: "' + itemId + '", plantname: "' + title + '", price: ' + price + ', image: "' + image + '" })}>Add to Cart</Button>');
    });

    fs.writeFileSync(filePath, content);
});

console.log('Fixed Add to Cart in static files!');

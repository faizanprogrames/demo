COUNTER

import React, { useState } from 'react';

const Counter: React.FC = () => {
const [count, setCount] = useState<number>(0);

const handleIncrement = () => {
setCount(count + 1);
};

return (

<div>
<p>Count: {count}</p>
<button onClick={handleIncrement}>Increment</button>
</div>
);
};

export default Counter;

TOGGLE

import React, { useState } from 'react';

const ToggleComponent: React.FC = () => {
const [isVisible, setIsVisible] = useState<boolean>(true);

const handleToggle = () => {
setIsVisible(!isVisible);
};

return (

<div>
<button onClick={handleToggle}>Toggle Content</button>
{isVisible && <p>This content is {isVisible ? 'visible' : 'hidden'}.</p>}
</div>
);
};

export default ToggleComponent;

SIMPLE FORM

import React, { useState } from 'react';

interface FormData {
name: string;
email: string;
}

const SimpleForm: React.FC = () => {
const [formData, setFormData] = useState<FormData>({
name: '',
email: '',
});

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

const handleSubmit = (e: React.FormEvent) => {
e.preventDefault();
console.log('Form data submitted:', formData);
};

return (
<form onSubmit={handleSubmit}>
<label>
Name:
<input type="text" name="name" value={formData.name} onChange={handleChange} />
</label>
<br />
<label>
Email:
<input type="email" name="email" value={formData.email} onChange={handleChange} />
</label>
<br />
<button type="submit">Submit</button>
</form>
);
};

export default SimpleForm;

COLOR PICKER

import React, { useState } from 'react';

const ColorPicker: React.FC = () => {
const [color, setColor] = useState<string>('#000000');

const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
setColor(e.target.value);
};

return (
<div>
<label>
Pick a color:
<input type="color" value={color} onChange={handleColorChange} />
</label>
<div style={{ backgroundColor: color, width: '50px', height: '50px' }}></div>
</div>
);
};

export default ColorPicker;

import React, { useState } from 'react';

interface Item {
id: number;
name: string;
}

const ListComponent: React.FC = () => {
const [items, setItems] = useState<Item[]>([]);
const [itemName, setItemName] = useState<string>('');

const handleAddItem = () => {
if (itemName.trim() !== '') {
const newItem: Item = {
id: items.length + 1,
name: itemName,
};

      setItems([...items, newItem]);
      setItemName('');
    }

};

return (
<div>
<ul>
{items.map((item) => (
<li key={item.id}>{item.name}</li>
))}
</ul>
<input
type="text"
value={itemName}
onChange={(e) => setItemName(e.target.value)}
placeholder="Enter item name"
/>
<button onClick={handleAddItem}>Add Item</button>
</div>
);
};

export default ListComponent;

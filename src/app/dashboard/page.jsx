'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Input, MenuItem, TableCell, TableRow, Button, TableContainer, TableHead, TableBody, Select, Paper, Typography, ButtonGroup} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import currencyFormatter from 'currency-formatter'
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Products = () => {
  const session = useSession();
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedEdit, setSelectedEdit] = useState(null);
  const [newProduct, setNewProduct] = useState({
    productName: '',
    category: '',
    startDate: '',
    endDate: '',
    stock: '',
    price: '',
    sell: '',
    amount: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [inputErrors, setInputErrors] = useState({
    productName: '',
    category: '',
    startDate: '',
    endDate: '',
    stock: '',
    price: '',
    sell: '',
    amount: '',
  });

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://648976915fa58521caafa371.mockapi.io/products');
      setProducts(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`https://648976915fa58521caafa371.mockapi.io/products/${productId}`);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const editProduct = async (productId) => {
    try {
      const productToEdit = products.find((product) => product.id === productId);
      const updatedProduct = {
        ...productToEdit,
        productName: newProduct.productName,
        category: newProduct.category,
        startDate: newProduct.startDate,
        endDate: newProduct.endDate,
        stock: newProduct.stock,
        price: newProduct.price,
        sell: newProduct.sell,
        amount: newProduct.amount,
      };
      await axios.put(`https://648976915fa58521caafa371.mockapi.io/products/${productId}`, updatedProduct);
      const updatedProducts = products.map((product) => {
        if (product.id === productId) {
          return updatedProduct;
        }
        return product;
      });
      setProducts(updatedProducts);
      setSelectedEdit(null);
      setNewProduct({
        productName: '',
        category: '',
        startDate: '',
        endDate: '',
        stock: '',
        price: '',
        sell: '',
        amount: '',
      });
      setIsEditing(false);
    } catch (error) {
      console.log(error);
    }
  };

  const addProduct = async () => {
    try {
      await axios.post('https://648976915fa58521caafa371.mockapi.io/products', newProduct);
      setNewProduct({
        productName: '',
        category: '',
        startDate: '',
        endDate: '',
        stock: '',
        price: '',
        sell: '',
        amount: '',
      });
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditClick = (productId) => {
    setSelectedEdit(productId);
    const productToEdit = products.find((product) => product.id === productId);
    setNewProduct({ ...productToEdit });
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Jika yang diubah adalah price atau sell, lakukan perhitungan dan simpan di amount
    if (name === 'price' || name === 'sell') {
      const price = name === 'price' ? value : newProduct.price;
      const sell = name === 'sell' ? value : newProduct.sell;
      const amount = price * sell;

      setNewProduct((prevProduct) => ({
        ...prevProduct,
        [name]: value,
        amount: amount,
      }));
    } else {
      setNewProduct((prevProduct) => ({
        ...prevProduct,
        [name]: value,
      }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!newProduct.productName) {
      errors.productName = 'Masukkan Nama Produk';
      isValid = false;
    }

    if (!newProduct.category) {
      errors.category = 'Masukkan Kategori Produk';
      isValid = false;
    }

    if (!newProduct.startDate) {
      errors.startDate = 'Tanggal Awal Harus Diisi';
      isValid = false;
    }

    if (!newProduct.endDate) {
      errors.endDate = 'Tanggal Akhir Harus Diisi';
      isValid = false;
    }

    if (!newProduct.stock) {
      errors.stock = 'Masukkan Stok Produk';
      isValid = false;
    }

    if (!newProduct.price) {
      errors.price = 'Masukkan Harga Produk';
      isValid = false;
    }

    if (!newProduct.sell) {
      errors.sell = 'Masukkan Penjualan Produk';
      isValid = false;
    }

    setInputErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      if (isEditing) {
        editProduct(selectedEdit);
      } else {
        addProduct();
      }
    }
  };

  if (session.status === "authenticated") {
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: 15 }}>Manajemen Produk</h1>

      <form onSubmit={handleSubmit}>
        {!isEditing && (
          <>
            <TableContainer component={Paper} sx={{ marginBottom: 5 }}>
              <Table>
                <TableHead sx={{ bgcolor: '#BACDDB', textAlign: 'center' }}>
                  <TableRow>
                    <TableCell>
                      <Typography sx={{ fontSize: 17, fontWeight: 'bold' }}>No</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography sx={{ fontSize: 17, fontWeight: 'bold' }}>Nama Produk</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography sx={{ fontSize: 17, fontWeight: 'bold' }}>Kategori Produk</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography sx={{ fontSize: 17, fontWeight: 'bold' }}>Tanggal Awal</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography sx={{ fontSize: 17, fontWeight: 'bold' }}>Tanggal Akhir</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography sx={{ fontSize: 17, fontWeight: 'bold' }}>Stok Produk</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography sx={{ fontSize: 17, fontWeight: 'bold' }}>Harga Produk</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography sx={{ fontSize: 17, fontWeight: 'bold' }}>Produk Terjual</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography sx={{ fontSize: 17, fontWeight: 'bold' }}>Jumlah</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography sx={{ fontSize: 17, fontWeight: 'bold' }}>Aksi</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>-</TableCell>
                    <TableCell>
                      <Input type="text" variant="contained" name="productName" value={newProduct.productName} onChange={handleInputChange} placeholder="Nama Produk" required />
                      {inputErrors.productName && <p>{inputErrors.productName}</p>}
                    </TableCell>
                    <TableCell>
                      <Select name="category" value={newProduct.category} onChange={handleInputChange} fullWidth required>
                        <MenuItem value="">Pilih Kategori</MenuItem>
                        <MenuItem value="Jaringan">Jaringan</MenuItem>
                        <MenuItem value="Laptop">Laptop</MenuItem>
                        <MenuItem value="Komputer">Komputer</MenuItem>
                        <MenuItem value="Aksesoris">Aksesoris</MenuItem>
                        <MenuItem value="Alat">Alat</MenuItem>
                      </Select>
                      {inputErrors.category && <p>{inputErrors.category}</p>}
                    </TableCell>
                    <TableCell>
                      <Input type="date" name="startDate" value={newProduct.startDate} onChange={handleInputChange} placeholder="Tanggal Awal Penjualan" required />
                      {inputErrors.startDate && <p>{inputErrors.startDate}</p>}
                    </TableCell>
                    <TableCell>
                      <Input type="date" name="endDate" value={newProduct.endDate} onChange={handleInputChange} placeholder="Tanggal Akhir Penjualan" required />
                      {inputErrors.endDate && <p>{inputErrors.endDate}</p>}
                    </TableCell>
                    <TableCell>
                      <Input type="number" name="stock" value={newProduct.stock} onChange={handleInputChange} placeholder="Stok Produk" required />
                      {inputErrors.stock && <p>{inputErrors.stock}</p>}
                    </TableCell>
                    <TableCell>
                      <Input type="number" name="price" value={newProduct.price} onChange={handleInputChange} placeholder="Harga Produk" required />
                      {inputErrors.price && <p>{inputErrors.price}</p>}
                    </TableCell>
                    <TableCell>
                      <Input type="number" name="sell" value={newProduct.sell} onChange={handleInputChange} placeholder="Produk Terjual" required />
                      {inputErrors.sell && <p>{inputErrors.sell}</p>}
                    </TableCell>
                    <TableCell>
                      <Input type="number" name="amount" value={newProduct.amount} onChange={handleInputChange} disabled />
                      {inputErrors.amount && <p>{inputErrors.amount}</p>}
                    </TableCell>
                    <TableCell>
                      <Button type="submit" variant="contained" color="success" endIcon={<SendIcon />} size="medium">
                        Tambahkan
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}

        <TableContainer component={Paper} sx={{ marginBottom: 5 }}>
          <Table>
            <TableHead sx={{ bgcolor: '#BACDDB' }}>
              <TableRow>
                <TableCell>
                  <Typography sx={{ fontSize: 17, fontWeight: 'bold' }}>No</Typography>
                </TableCell>
                <TableCell>
                  <Typography sx={{ fontSize: 17, fontWeight: 'bold' }}>Nama Produk</Typography>
                </TableCell>
                <TableCell>
                  <Typography sx={{ fontSize: 17, fontWeight: 'bold' }}>Kategori Produk</Typography>
                </TableCell>
                <TableCell>
                  <Typography sx={{ fontSize: 17, fontWeight: 'bold' }}>Tanggal Awal</Typography>
                </TableCell>
                <TableCell>
                  <Typography sx={{ fontSize: 17, fontWeight: 'bold' }}>Tanggal Akhir</Typography>
                </TableCell>
                <TableCell>
                  <Typography sx={{ fontSize: 17, fontWeight: 'bold' }}>Stok Produk</Typography>
                </TableCell>
                <TableCell>
                  <Typography sx={{ fontSize: 17, fontWeight: 'bold' }}>Harga Produk</Typography>
                </TableCell>
                <TableCell>
                  <Typography sx={{ fontSize: 17, fontWeight: 'bold' }}>Produk Terjual</Typography>
                </TableCell>
                <TableCell>
                  <Typography sx={{ fontSize: 17, fontWeight: 'bold' }}>Jumlah</Typography>
                </TableCell>
                <TableCell>
                  <Typography sx={{ fontSize: 17, fontWeight: 'bold' }}>Aksi</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product, index) => (
                <TableRow key={product.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    {selectedEdit === product.id ? <Input type="text" name="productName" value={newProduct.productName} onChange={handleInputChange} placeholder="Nama Produk" required /> : product.productName}
                    {selectedEdit === product.id && inputErrors.productName && <p>{inputErrors.productName}</p>}
                  </TableCell>
                  <TableCell>
                    {selectedEdit === product.id ? (
                      <Select name="category" value={newProduct.category} onChange={handleInputChange} fullWidth required>
                        <MenuItem value="">Pilih Kategori</MenuItem>
                        <MenuItem value="Jaringan">Jaringan</MenuItem>
                        <MenuItem value="Laptop">Laptop</MenuItem>
                        <MenuItem value="Komputer">Komputer</MenuItem>
                        <MenuItem value="Aksesoris">Aksesoris</MenuItem>
                        <MenuItem value="Alat">Alat</MenuItem>
                      </Select>
                    ) : (
                      product.category
                    )}
                    {selectedEdit === product.id && inputErrors.category && <p>{inputErrors.category}</p>}
                  </TableCell>
                  <TableCell>
                    {selectedEdit === product.id ? <Input type="date" name="startDate" value={newProduct.startDate} onChange={handleInputChange} placeholder="Tanggal Awal Penjualan" required /> : product.startDate}
                    {selectedEdit === product.id && inputErrors.startDate && <p>{inputErrors.startDate}</p>}
                  </TableCell>
                  <TableCell>
                    {selectedEdit === product.id ? <Input type="date" name="endDate" value={newProduct.endDate} onChange={handleInputChange} placeholder="Tanggal Akhir Penjualan" required /> : product.endDate}
                    {selectedEdit === product.id && inputErrors.endDate && <p>{inputErrors.endDate}</p>}
                  </TableCell>
                  <TableCell>
                    {selectedEdit === product.id ? <Input type="number" name="stock" value={newProduct.stock} onChange={handleInputChange} placeholder="Stok Produk" required /> : product.stock}
                    {selectedEdit === product.id && inputErrors.stock && <p>{inputErrors.stock}</p>}
                  </TableCell>
                  <TableCell>
                    {selectedEdit === product.id ? <Input type="number" name="price" value={product.price} onChange={handleInputChange} placeholder="Harga Produk" required /> : currencyFormatter.format(product.price, { code: 'IDR' })}
                    {selectedEdit === product.id && inputErrors.price && <p>{inputErrors.price}</p>}
                  </TableCell>
                  <TableCell>
                    {selectedEdit === product.id ? <Input type="number" name="sell" value={newProduct.sell} onChange={handleInputChange} placeholder="Produk Terjual" required /> : product.sell}
                    {selectedEdit === product.id && inputErrors.sell && <p>{inputErrors.sell}</p>}
                  </TableCell>
                  <TableCell>
                    {selectedEdit === product.id ? <Input type="number" name="amount" value={product.amount} onChange={handleInputChange} placeholder="Jumlah" required /> : currencyFormatter.format(product.amount, { code: 'IDR' })}
                    {selectedEdit === product.id && inputErrors.amount && <p>{inputErrors.amount}</p>}
                  </TableCell>
                  <TableCell>
                    {selectedEdit === product.id ? (
                      <Button type="button" onClick={() => editProduct(product.id)} variant="contained" endIcon={<SaveIcon />} sx={{ bgcolor: '#4942E4' }}>
                        Simpan
                      </Button>
                    ) : (
                      <ButtonGroup>
                        <Button type="button" onClick={() => handleEditClick(product.id)} variant="contained" endIcon={<EditIcon />} sx={{ bgcolor: '#FFA41B' }}>
                          Ubah
                        </Button>
                        <Button type="button" onClick={() => deleteProduct(product.id)} variant="contained" endIcon={<DeleteIcon />} color="error">
                          Hapus
                        </Button>
                      </ButtonGroup>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </form>
    </div>
  );
                    };
};

export default Products;
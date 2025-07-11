import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export async function getProducts() {
  try {
    const q = query(collection(db, "products"));
    const snapshot = await getDocs(q);
    const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return products;
  } catch (error) {
    console.error("Error al obtener productos:", error);
    return [];
  }
}

export async function getProductsByCategory(categoryId) {
  try {
    const q = query(
      collection(db, "products"),
      where("categoryId", "==", categoryId)
    );
    const snapshot = await getDocs(q);
    const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return products;
  } catch (error) {
    console.error("Error al obtener productos por categoría:", error);
    return [];
  }
}

export async function getProductById(productId) {
  try {
    const docRef = doc(db, "products", productId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      console.warn("Producto no encontrado:", productId);
      return null;
    }
  } catch (error) {
    console.error("Error al obtener producto por ID:", error);
    return null;
  }
}
import unittest
from bst import BST, Node


class TestBST(unittest.TestCase):
    def test_insert_root(self):
        bst = BST()
        node = bst.insert(5)
        self.assertEqual(bst.root, node)

    def test_insert_left_child(self):
        bst = BST(Node(5))
        node = bst.insert(3)
        self.assertEqual(bst.root.left, node)
        self.assertEqual(node.parent, bst.root)

    def test_insert_right_child(self):
        bst = BST(Node(5))
        node = bst.insert(7)
        self.assertEqual(bst.root.right, node)
        self.assertEqual(node.parent, bst.root)

    def test_insert_duplicate_data(self):
        bst = BST(Node(5))
        with self.assertRaises(ValueError):
            bst.insert(5)

    def test_insert_invalid_data(self):
        bst = BST()
        with self.assertRaises(TypeError):
            bst.insert(None)


if __name__ == "__main__":
    unittest.main()

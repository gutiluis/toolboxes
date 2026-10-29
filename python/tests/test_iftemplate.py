import unittest

from toolbox.iftemplate import render_users


class TestRenderUsers(unittest.TestCase):
    def test_render_users(self):
        result = render_users("goku", "vegeta")

        self.assertEqual(
            result,
            "<ul><li>goku</li><li>vegeta</li></ul>",
        )

    def test_render_users_empty(self):
        # empty input handled by {% if users %}
        self.assertEqual(render_users(), "")

    def test_render_users_escapes_html(self):
        result = render_users("<script>")

        self.assertEqual(
            result,
            "<ul><li>&lt;script&gt;</li></ul>",
        )


if __name__ == "__main__":
    unittest.main()

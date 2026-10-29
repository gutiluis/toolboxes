from jinja2 import Template


def render_users(*usernames: str) -> str:
    """Render usernames as an HTML list."""
    users = [{"username": username} for username in usernames]

    template = Template(
        "{% if users %}"
        "<ul>"
        "{% for user in users %}"
        "<li>{{ user.username|e }}</li>"
        "{% endfor %}"
        "</ul>"
        "{% endif %}"
    )

    return template.render(users=users)

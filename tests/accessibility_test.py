from playwright.sync_api import sync_playwright

def test_skip_to_content():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Go to the local server
        page.goto("http://localhost:8080/")

        # The skip link should be the first focusable element
        page.keyboard.press("Tab")

        # Check if the focused element is our skip link
        skip_link = page.locator("a[href='#main-content']")

        # In Playwright, some properties are checked via JS
        is_focused = page.evaluate("el => document.activeElement === el", skip_link.element_handle())
        assert is_focused, "Skip link should be focused after first Tab"

        # Check text
        assert skip_link.inner_text() == "Pular para o conteúdo principal"

        # Press Enter to follow the link
        page.keyboard.press("Enter")

        # The focus should move to the main content
        main_content = page.locator("#main-content")
        is_main_focused = page.evaluate("el => document.activeElement === el", main_content.element_handle())
        assert is_main_focused, "Main content should be focused after clicking skip link"

        browser.close()
        print("Test passed!")

if __name__ == "__main__":
    test_skip_to_content()

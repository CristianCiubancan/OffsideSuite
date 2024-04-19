from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
import time
import pyautogui

def skip_ads():
    while True:
        time.sleep(1)
        ad_buttons = driver.find_elements(By.CSS_SELECTOR, "button.ytp-ad-skip-button.ytp-button")
        if ad_buttons:
            ad_buttons[0].click()
            break

def watch_video(search_query):
    search_box = driver.find_element(By.NAME, "search_query")
    search_box.clear()
    search_box.send_keys(search_query)
    search_box.send_keys(Keys.RETURN)
    time.sleep(3)  # Wait for search results to load

    videos = driver.find_elements(By.ID, "video-title")
    if videos:
        videos[0].click()
        time.sleep(5)  # Wait for video to load and ads to potentially start
        skip_ads()
        time.sleep(10)  # Watch video for some time
        driver.back()
        time.sleep(3)  # Wait to go back to search results
        videos = driver.find_elements(By.ID, "video-title")
        if len(videos) > 1:
            videos[1].click()
            time.sleep(5)
            skip_ads()
            time.sleep(10)  # Watch second video for some time

# Setup Chrome driver
options = webdriver.ChromeOptions()
options.add_experimental_option("excludeSwitches", ["enable-automation"])
options.add_experimental_option('useAutomationExtension', False)
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

# Navigate to YouTube
driver.get("https://www.youtube.com")
time.sleep(2)

# Perform video search and handling
watch_video("Travis Scott - FE!N ft. Playboi Carti")

# Close the browser after the task
driver.quit()

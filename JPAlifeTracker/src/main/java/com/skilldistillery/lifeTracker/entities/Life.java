package com.skilldistillery.lifeTracker.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Life {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String name;
	
	@Column(name="userstory")	
	private String userStory;
	
	
	@Column(name="description")	
	private String description;
	
	@Column(name="url_list")
	private String urlList;
	
	@Column(name="category")
	private String category;
	
	@Column(name="priority")
	private String priority;
	
	@Column(name="line_number")
	private Integer lineNumber;
	
	@Column(name="sub_menu")
	private String subMenu;
	
	@Column(name="time_created")
	private String timeCreated;


	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUserStory() {
		return userStory;
	}

	public void setUserStory(String userStory) {
		this.userStory = userStory;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getUrlList() {
		return urlList;
	}

	public void setUrlList(String urlList) {
		this.urlList = urlList;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getPriority() {
		return priority;
	}

	public void setPriority(String priority) {
		this.priority = priority;
	}

	public Integer getLineNumber() {
		return lineNumber;
	}

	public void setLineNumber(Integer lineNumber) {
		this.lineNumber = lineNumber;
	}

	public String getSubMenu() {
		return subMenu;
	}

	public void setSubMenu(String subMenu) {
		this.subMenu = subMenu;
	}



	public Life(int id, String name, String userStory, String description, String urlList, String category,
			String priority, int lineNumber, String subMenu, String timeCreated) {
		super();
		this.id = id;
		this.name = name;
		this.userStory = userStory;
		this.description = description;
		this.urlList = urlList;
		this.category = category;
		this.priority = priority;
		this.lineNumber = lineNumber;
		this.subMenu = subMenu;
		this.timeCreated = timeCreated;
	}

	public Life() {
		super();
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((category == null) ? 0 : category.hashCode());
		result = prime * result + ((description == null) ? 0 : description.hashCode());
		result = prime * result + id;
		result = prime * result + lineNumber;
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + ((priority == null) ? 0 : priority.hashCode());
		result = prime * result + ((subMenu == null) ? 0 : subMenu.hashCode());
		result = prime * result + ((urlList == null) ? 0 : urlList.hashCode());
		result = prime * result + ((userStory == null) ? 0 : userStory.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Life other = (Life) obj;
		if (category == null) {
			if (other.category != null)
				return false;
		} else if (!category.equals(other.category))
			return false;
		if (description == null) {
			if (other.description != null)
				return false;
		} else if (!description.equals(other.description))
			return false;
		if (id != other.id)
			return false;
		if (lineNumber != other.lineNumber)
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (priority == null) {
			if (other.priority != null)
				return false;
		} else if (!priority.equals(other.priority))
			return false;
		if (subMenu == null) {
			if (other.subMenu != null)
				return false;
		} else if (!subMenu.equals(other.subMenu))
			return false;
		if (urlList == null) {
			if (other.urlList != null)
				return false;
		} else if (!urlList.equals(other.urlList))
			return false;
		if (userStory == null) {
			if (other.userStory != null)
				return false;
		} else if (!userStory.equals(other.userStory))
			return false;
		return true;
	}

	public String getTimeCreated() {
		return timeCreated;
	}

	public void setTimeCreated(String timeCreated) {
		this.timeCreated = timeCreated;
	}

	@Override
	public String toString() {
		return "Life [id=" + id + ", name=" + name + ", userStory=" + userStory + ", description=" + description
				+ ", urlList=" + urlList + ", category=" + category + ", priority=" + priority + ", lineNumber="
				+ lineNumber + ", subMenu=" + subMenu + ", timeCreated=" + timeCreated + "]";
	}
	

	
	
	
}
	
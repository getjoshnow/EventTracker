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

	private String Name;
	
	private String UserStory;
	
	private String Description;
	
	@Column(name="url_list")
	private String urlList;
	
	private String Category;
	
	private String priority;
	
	@Column(name="line_number")
	private int line_Number;
	
	private String SubMenu;
	
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	
	public  String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public String getUserStory() {
		return UserStory;
	}

	public void setUserStory(String userStory) {
		UserStory = userStory;
	}

	public String getDescription() {
		return Description;
	}

	public void setDescription(String description) {
		Description = description;
	}


	public String getUrlList() {
		return urlList;
	}

	public void setUrlList(String urlList) {
		this.urlList = urlList;
	}

	public String getCategory() {
		return Category;
	}

	public void setCategory(String category) {
		Category = category;
	}

	public String getPriority() {
		return priority;
	}

	public void setPriority(String priority) {
		this.priority = priority;
	}

	public int getLine_Number() {
		return line_Number;
	}

	public void setLine_Number(int line_Number) {
		this.line_Number = line_Number;
	}

	public String getSubMenu() {
		return SubMenu;
	}

	public void setSubMenu(String subMenu) {
		SubMenu = subMenu;
	}

	@Override
	public String toString() {
		return "Life [id=" + id + ", Name=" + Name + ", UserStory=" + UserStory + ", Description=" + Description
				+ ", urlList=" + urlList + ", Category=" + Category + ", priority=" + priority + ", line_Number="
				+ line_Number + ", SubMenu=" + SubMenu + "]";
	}


}

import conf from "../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Services {
  client = new Client();
  databases;
  bucket;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    
    this.databases = new Databases(this.client)
    this.bucket = new Storage(this.client)
  }

  async createPost({title, slug, content, image, status, userId}){
    try {
      return await this.databases.createDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug,{
            title,
            content,
            image,
            status,
            userId
        })
    } catch (error) {
        console.log("Appwrite service :: createPost", error);
    }
  }

  async updatePost(slug, {title,content,image, status}){
    try {
        return await this.databases.updateDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug, {
            title,
            content,
            image,
            status
        })
    } catch (error) {
        console.log("Appwrite service :: updatePost", error);
    }
  }

  async deletePost(slug) {
    try {
         await this.databases.deleteDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug)
         return true
    } catch (error) {
        console.log("Appwrite service :: deletePost", error);
        return false
    }
  }

  async getOnePost(slug){
    try {
    return  await this.databases.getDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug)
    } catch (error) {
      console.log("Appwrite service :: getOnePost", error);
    }
  }

  async getAllPost(query = [Query.equal("status","active")]){
    try {
      return await this.databases.listDocuments(conf.appwriteDatabaseId,conf.appwriteCollectionId,query)
    } catch (error) {
      console.log("Appwrite service :: getAllPost", error);
    }
  }

  // Files servies

  async uploadFile(file){
    try {
      await this.bucket.createFile(conf.appwriteBucketId,ID.unique(),file)
      return true
    } catch (error) {
      console.log("Appwrite service :: uploadFile", error);
      return false
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId,fileId)
      return true
    } catch (error) {
      console.log("Appwrite service :: deleteFile", error);
      return false
    }
  }

   getFilePreview(fileId){
    try {
      return this.bucket.getFilePreview(conf.appwriteBucketId, fileId)
    } catch (error) {
      console.log("Appwrite service :: getFilePreview", error);
    }
  }

}

const services = new Services();

export default services;

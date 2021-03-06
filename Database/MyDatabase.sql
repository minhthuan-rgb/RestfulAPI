USE [MyDatabase]
GO
/****** Object:  Table [dbo].[Files]    Script Date: 4/27/2022 5:09:50 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Files](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](150) NOT NULL,
	[createdAt] [nvarchar](30) NULL,
	[createdBy] [nvarchar](50) NOT NULL,
	[modifiedAt] [nvarchar](30) NULL,
	[modifiedBy] [nvarchar](50) NOT NULL,
	[extension] [nvarchar](10) NOT NULL,
 CONSTRAINT [PK_Files] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Folders]    Script Date: 4/27/2022 5:09:50 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Folders](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](150) NULL,
	[createdAt] [nvarchar](30) NULL,
	[createdBy] [nvarchar](50) NULL,
	[modifiedAt] [nvarchar](30) NULL,
	[modifiedBy] [nvarchar](50) NULL,
	[subFolderId] [int] NULL,
 CONSTRAINT [PK_Folder] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Files] ON 

INSERT [dbo].[Files] ([id], [name], [createdAt], [createdBy], [modifiedAt], [modifiedBy], [extension]) VALUES (1, N'CoasterAndBargeLoading.xlsx', N'April 08', N'Minh Thuan', N'A few seconds ago', N'Administrator', N'xlsx')
INSERT [dbo].[Files] ([id], [name], [createdAt], [createdBy], [modifiedAt], [modifiedBy], [extension]) VALUES (2, N'RevenueByServices.xlsx', N'April 08', N'Minh Thuan', N'A few seconds ago', N'Administrator', N'xlsx')
INSERT [dbo].[Files] ([id], [name], [createdAt], [createdBy], [modifiedAt], [modifiedBy], [extension]) VALUES (3, N'RevenueByServices2016.xlsx', N'April 08', N'Minh Thuan', N'A few seconds ago', N'Administrator', N'xlsx')
INSERT [dbo].[Files] ([id], [name], [createdAt], [createdBy], [modifiedAt], [modifiedBy], [extension]) VALUES (4, N'RevenueByServices2017.xlsx', N'April 08', N'Minh Thuan', N'A few seconds ago', N'Administrator', N'xlsx')
SET IDENTITY_INSERT [dbo].[Files] OFF
GO
SET IDENTITY_INSERT [dbo].[Folders] ON 

INSERT [dbo].[Folders] ([id], [name], [createdAt], [createdBy], [modifiedAt], [modifiedBy], [subFolderId]) VALUES (1, N'CAS', N'April 08', N'Minh Thuan', N'A few seconds ago', N'skyhenry16@gmail.com', NULL)
SET IDENTITY_INSERT [dbo].[Folders] OFF
GO
